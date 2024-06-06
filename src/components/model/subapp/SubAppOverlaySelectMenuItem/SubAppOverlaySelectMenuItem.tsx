import { type SubAppID } from "@portal-core/types";

import { SubAppSelectMenuItem } from "@portal-app/components/model/subapp/SubAppSelectMenuItem";
import { APP_ID_NOTFOUND, subApps } from "@portal-app/subApps";

interface SubAppOverlaySelectMenuItemProps {
  subAppID: SubAppID;
}

const SubAppOverlaySelectMenuItem = ({
  subAppID,
}: SubAppOverlaySelectMenuItemProps): JSX.Element => {
  const app = subApps.get(subAppID) ?? subApps.get(APP_ID_NOTFOUND);
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
