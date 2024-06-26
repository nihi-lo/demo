import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/react";

import { type SubAppID } from "@portal-core/types";

import { SubAppSelectMenuItem } from "@portal-client/components/model/subapp/SubAppSelectMenuItem";
import { subApps } from "@portal-client/subapp";

interface SubAppSortableSelectMenuItemProps {
  isSelected?: boolean;
  subAppID: SubAppID;
}

const SubAppSortableSelectMenuItem = ({
  isSelected = false,
  subAppID,
}: SubAppSortableSelectMenuItemProps): JSX.Element => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: subAppID });

  const app = subApps.get(subAppID);
  if (app === undefined) {
    return <></>;
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <SubAppSelectMenuItem
        appIconContent={
          <Link href={`/apps/${subAppID}`}>
            <div ref={setActivatorNodeRef} {...attributes} {...listeners}>
              {isDragging ? <div className="size-12 bg-divider" /> : <app.metadata.AppIcon />}
            </div>
          </Link>
        }
        hideSelectionState={isDragging}
        hideTooltip={isDragging}
        isSelected={isSelected}
        tooltipContent={app.metadata.title}
      />
    </div>
  );
};

export { type SubAppSortableSelectMenuItemProps, SubAppSortableSelectMenuItem };
