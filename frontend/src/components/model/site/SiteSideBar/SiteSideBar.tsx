import {
  DndContext,
  closestCenter,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Divider } from "@nextui-org/react";
import { useState } from "react";

import { type SubAppID } from "@packages/portal-core";
import { VStack } from "@packages/portal-ui";

import { useFavoriteAppStore } from "@/stores/useFavoriteAppStore";

import { SubAppOverlaySelectMenuItem } from "@/components/model/subapp/SubAppOverlaySelectMenuItem";
import { SubAppSortableSelectMenuItem } from "@/components/model/subapp/SubAppSortableSelectMenuItem";
import { ThemeToggleButton } from "@/components/model/theme/ThemeToggleButton";

const SiteSideBar = (): JSX.Element => {
  const { favoriteApps, setFavoriteApps } = useFavoriteAppStore();

  const [activeID, setActiveID] = useState<SubAppID | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 0 } }));

  /* Event handlers */
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveID(active.id as SubAppID);
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over !== null && active.id !== over.id) {
      const newArray = arrayMove(
        favoriteApps,
        favoriteApps.indexOf(active.id as SubAppID),
        favoriteApps.indexOf(over.id as SubAppID),
      );
      setFavoriteApps(newArray);
    }
    setActiveID(null);
  };

  return (
    <VStack as="aside" align="center" justify="between" className="h-full w-20">
      {/* アプリ選択エリア */}
      <VStack align="center" py="sm" gap="sm">
        {/* ホームアプリ */}
        <SubAppSortableSelectMenuItem subAppID={1} />
        <Divider className="w-4/5" />

        {/* お気に入りアプリ */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={favoriteApps} strategy={verticalListSortingStrategy}>
            {favoriteApps.map((id) => (
              <SubAppSortableSelectMenuItem key={id} isSelected={true} subAppID={id} />
            ))}
          </SortableContext>
          <DragOverlay>
            {activeID && <SubAppOverlaySelectMenuItem subAppID={activeID} />}
          </DragOverlay>
        </DndContext>

        {/* その他のアプリ */}
        <Divider className="w-4/5" />
        <SubAppSortableSelectMenuItem subAppID={2} />
      </VStack>

      {/* 設定アプリエリア */}
      <VStack align="center" py="sm" gap="sm">
        <ThemeToggleButton />
      </VStack>
    </VStack>
  );
};

export { SiteSideBar };
