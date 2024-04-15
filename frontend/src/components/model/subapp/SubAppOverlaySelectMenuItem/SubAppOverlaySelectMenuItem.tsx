import { type SubAppID } from "@packages/portal-core";

import { SubAppSelectMenuItem } from "@/components/model/subapp/SubAppSelectMenuItem";

import { subApps } from "@/subApps";

interface SubAppOverlaySelectMenuItemProps {
  subAppID: SubAppID;
}

const SubAppOverlaySelectMenuItem = ({
  subAppID,
}: SubAppOverlaySelectMenuItemProps): JSX.Element => {
  const app = subApps.get(subAppID) ?? subApps.get(0);
  if (app === undefined) {
    return <></>;
  }

  return (
    <SubAppSelectMenuItem
      appIconContent={
        <div className="cursor-grabbing">
          <app.metadata.AppIcon />
        </div>
      }
      disableAnimation
      hideSelectionState
      hideTooltip
    />
  );
};

export { type SubAppOverlaySelectMenuItemProps, SubAppOverlaySelectMenuItem };
