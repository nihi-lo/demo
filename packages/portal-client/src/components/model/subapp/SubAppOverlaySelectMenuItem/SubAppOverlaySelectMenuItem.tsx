import { type SubAppID } from "@portal-core/types";

import { SubAppSelectMenuItem } from "@portal-client/components/model/subapp/SubAppSelectMenuItem";
import { subApps } from "@portal-client/subapp";

interface SubAppOverlaySelectMenuItemProps {
  subAppID: SubAppID;
}

const SubAppOverlaySelectMenuItem = ({
  subAppID,
}: SubAppOverlaySelectMenuItemProps): JSX.Element => {
  const app = subApps.get(subAppID);
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
