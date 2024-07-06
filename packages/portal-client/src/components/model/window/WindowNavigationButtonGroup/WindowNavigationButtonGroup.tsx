import { ButtonGroup, Button } from "@nextui-org/react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

import { useWindowNavigationButtonGroup } from "./WindowNavigationButtonGroup.hooks";

const WindowNavigationButtonGroup = (): JSX.Element => {
  const {
    state: { backButtonIsDisabled, forwardButtonIsDisabled },
    action: { handleBackPage, handleForwardPage },
  } = useWindowNavigationButtonGroup();

  return (
    <ButtonGroup>
      <Button
        disableRipple
        isDisabled={backButtonIsDisabled}
        isIconOnly
        onClick={handleBackPage}
        radius="none"
        size="sm"
        variant="ghost"
        className="h-9 border-none"
      >
        <TbChevronLeft className="size-5" />
      </Button>
      <Button
        disableRipple
        isDisabled={forwardButtonIsDisabled}
        isIconOnly
        onClick={handleForwardPage}
        radius="none"
        size="sm"
        variant="ghost"
        className="h-9 border-none"
      >
        <TbChevronRight className="size-5" />
      </Button>
    </ButtonGroup>
  );
};

export { WindowNavigationButtonGroup };
