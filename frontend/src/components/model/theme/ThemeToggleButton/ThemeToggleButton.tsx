import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  type Selection,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { type Key, useEffect, useState } from "react";
import { TbHelpCircleFilled, TbMoon, TbSun } from "react-icons/tb";

import {
  type ThemeToggleButtonVariantProps as VariantProps,
  themeToggleButtonVariants as variants,
} from "./ThemeToggleButton.variants";

type ThemeToggleButtonProps = VariantProps;

const ThemeToggleButton = ({ ...props }: ThemeToggleButtonProps): JSX.Element => {
  /* React hooks */
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme ?? ""]));

  /* ClassName variants */
  const { base } = variants();

  /* Event handlers */
  const handleAction = (key: Key): void => {
    setTheme(key.toString());
  };
  const handleSelectionChange = (keys: Selection): unknown => {
    if (keys !== "all") {
      setSelectedKeys(new Set([keys.values().next().value as string]));
    }
    return;
  };

  const ThemeIcon =
    theme === "system"
      ? systemTheme === "light"
        ? TbSun
        : systemTheme === "dark"
          ? TbMoon
          : TbHelpCircleFilled
      : theme === "light"
        ? TbSun
        : theme === "dark"
          ? TbMoon
          : TbHelpCircleFilled;

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  return (
    <Dropdown className={base()} {...props}>
      <DropdownTrigger>
        <Button isIconOnly size="lg" variant="light" isDisabled={!mounted}>
          <ThemeIcon className="size-8" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Themes"
        selectedKeys={selectedKeys}
        selectionMode="single"
        onAction={handleAction}
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
ThemeToggleButton.displayName = "ThemeToggleButton";

export { ThemeToggleButton };
