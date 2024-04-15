import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/react";

import { type SubAppID } from "@packages/portal-core";

import { SubAppSelectMenuItem } from "@/components/model/subapp/SubAppSelectMenuItem";

import { subApps } from "@/subApps";

interface SubAppSortableSelectMenuItemProps {
  subAppID: SubAppID;
}

const SubAppSortableSelectMenuItem = ({
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

  const app = subApps.get(subAppID) ?? subApps.get(0);
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
          <Link href={`/${app.metadata.key}`} className="hover:opacity-100">
            <div ref={setActivatorNodeRef} {...attributes} {...listeners}>
              {isDragging ? <div className="size-12 bg-divider" /> : <app.metadata.AppIcon />}
            </div>
          </Link>
        }
        hideSelectionState={isDragging}
        hideTooltip={isDragging}
        tooltipContent={app.metadata.title}
      />
    </div>
  );
};

export { type SubAppSortableSelectMenuItemProps, SubAppSortableSelectMenuItem };
