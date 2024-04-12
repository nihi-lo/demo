import { act, cleanup, renderHook } from "@testing-library/react";

import { useApp } from "./App.hooks";

describe("Testing useApp", () => {
  beforeEach(() => {
    cleanup();
  });

  test("inputNameの初期値が空文字列であること", () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.inputName).toBe("");
  });

  test("resultTextの初期値がundefinedであること", () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.resultText).toBe(undefined);
  });

  test("handleGreetClickを実行するとresultTextが更新されること", async () => {
    vi.mock("@wailsjs/go/main/App", () => ({
      Greet: vitest.fn().mockResolvedValue("foo"),
    }));

    const { result } = renderHook(() => useApp());
    await act(async () => {
      result.current.handleGreetClick();
      await Promise.resolve(); /* 非同期処理の完了を待つ */
    });
    expect(result.current.resultText).toBe("foo");
  });

  test("handleInputChangeを実行すると引数で渡した文字列がinputNameにセットされること", () => {
    const { result } = renderHook(() => useApp());
    act(() => result.current.handleInputChange("foo"));
    expect(result.current.inputName).toBe("foo");
  });
});
