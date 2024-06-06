import { Tooltip } from "@nextui-org/react";

import { ThemeToggleButton } from "@portal-client/components/model/theme/ThemeToggleButton";

const SiteManagementButton = (): JSX.Element => {
  return (
    <Tooltip
      placement="right"
      content="管理"
      closeDelay={0}
      classNames={{ base: "pointer-events-none select-none" }}
    >
      <ThemeToggleButton />
    </Tooltip>
  );
};
SiteManagementButton.displayName = "SiteManagementButton";

export { SiteManagementButton };
