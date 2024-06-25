import { Button, ButtonGroup } from "@nextui-org/react";
import { TbCopy, TbMinus, TbSquare, TbX } from "react-icons/tb";

import { useWindowControlButtonGroup } from "./WindowControlButtonGroup.hooks";

const WindowControlButtonGroup = (): JSX.Element => {
  /* React hooks */
  const hooks = useWindowControlButtonGroup();

  const Icon = hooks.isMaximised ? TbCopy : TbSquare;

  return (
    <ButtonGroup>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="default"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={hooks.windowMinimise}
      >
        <TbMinus className="size-5 text-foreground" />
      </Button>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="default"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={hooks.windowToggleMaximise}
      >
        <Icon className="ml-0.5 size-4 scale-x-[-1] text-foreground" />
      </Button>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="danger"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={hooks.windowQuit}
      >
        <TbX className="size-5 text-foreground group-data-[hover]:text-white" />
      </Button>
    </ButtonGroup>
  );
};

export { WindowControlButtonGroup };
