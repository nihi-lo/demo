package main

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

type TemplateData struct {
	SubAppGoPackageName string
	SubAppName          string
	SubAppId            string
	SubAppTitle         string
	SubAppTitleInitial  string
}

func main() {
	if len(os.Args) < 4 {
		fmt.Println("引数が足りません")
		os.Exit(1)
	}

	subAppId := os.Args[1]
	subAppName := os.Args[2]
	subAppTitle := os.Args[3]
	if subAppId == "" || subAppName == "" || subAppTitle == "" {
		fmt.Println("空文字は指定できません")
		os.Exit(1)
	}

	data := TemplateData{
		SubAppGoPackageName: strings.ToLower(strings.ReplaceAll(subAppName, "-", "")),
		SubAppName:          strings.ToLower(subAppName),
		SubAppId:            subAppId,
		SubAppTitle:         subAppTitle,
		SubAppTitleInitial:  string([]rune(subAppTitle)[0]),
	}
	srcRoot := "./.template/sub-app"
	destRoot := "./packages/" + data.SubAppName

	err := filepath.Walk(srcRoot, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// コピー先のパスを作成
		relPath, err := filepath.Rel(srcRoot, path)
		if err != nil {
			return err
		}
		destPath := filepath.Join(destRoot, relPath)

		// ディレクトリを作成またはファイルをコピー
		if info.IsDir() {
			return os.MkdirAll(destPath, info.Mode())
		} else {
			if filepath.Ext(path) == ".tmpl" {
				return copyTemplateFile(path, strings.TrimSuffix(destPath, ".tmpl"), data)
			} else {
				return copyFile(path, destPath)
			}
		}
	})
	if err != nil {
		fmt.Printf("error: %v\n", err)
		os.Exit(1)
	}
}

func copyTemplateFile(src string, dest string, data TemplateData) error {
	tmpl, err := template.ParseFiles(src)
	if err != nil {
		return err
	}

	destFile, err := os.Create(dest)
	if err != nil {
		return err
	}
	defer destFile.Close()

	return tmpl.Execute(destFile, data)
}

func copyFile(src string, dest string) error {
	srcFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer srcFile.Close()

	destFile, err := os.Create(dest)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = io.Copy(destFile, srcFile)
	if err != nil {
		return err
	}

	// ファイルのパーミッションをコピー
	srcInfo, err := os.Stat(src)
	if err != nil {
		return err
	}
	return os.Chmod(dest, srcInfo.Mode())
}
