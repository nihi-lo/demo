import { Tooltip } from "@nextui-org/react";

import { HStack } from "@packages/portal-ui";

import {
  type SubAppSelectMenuItemVariantProps as VariantProps,
  subAppSelectMenuItemVariants as variants,
} from "./SubAppSelectMenuItem.variants";

interface SubAppSelectMenuItemProps extends VariantProps {
  appIconContent: React.ReactNode;
  hideTooltip?: boolean;
  tooltipContent?: string;
}

const SubAppSelectMenuItem = (props: SubAppSelectMenuItemProps): JSX.Element => {
  const {
    appIconContent,
    disableAnimation = false,
    hideSelectionState = false,
    hideTooltip = false,
    isSelected = false,
    tooltipContent = undefined,
  } = props;

  /* ClassName variants */
  const { iconWrapper, selectionState } = variants({
    disableAnimation,
    hideSelectionState,
    isSelected,
  });

  return (
    <HStack align="center" justify="between" className="w-20 flex-row-reverse">
      <div className="h-2 w-1 bg-transparent" />
      <Tooltip
        disableAnimation={disableAnimation}
        isDisabled={hideTooltip || tooltipContent === undefined}
        placement="right"
        content={tooltipContent}
        closeDelay={0}
        classNames={{ base: "pointer-events-none select-none" }}
      >
        <div className={iconWrapper()}>{appIconContent}</div>
      </Tooltip>
      <div className={selectionState()} />
    </HStack>
  );
};

export { type SubAppSelectMenuItemProps, SubAppSelectMenuItem };
