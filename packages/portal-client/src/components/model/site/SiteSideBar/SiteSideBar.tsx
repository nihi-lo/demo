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

import { type SubAppID } from "@portal-core/types";
import { VStack } from "@portal-core/ui";

import { AccountSignInButton } from "@portal-client/components/model/account/AccountSignInButton";
import { SiteManagementButton } from "@portal-client/components/model/site/SiteManagementButton";
import { SubAppOverlaySelectMenuItem } from "@portal-client/components/model/subapp/SubAppOverlaySelectMenuItem";
import { SubAppSortableSelectMenuItem } from "@portal-client/components/model/subapp/SubAppSortableSelectMenuItem";
import { useActiveAppStore } from "@portal-client/stores/useActiveAppStore";
import { useFavoriteAppOrderStore } from "@portal-client/stores/useFavoriteAppOrderStore";
import { APP_ID_HOME, APP_ID_OTHER } from "@portal-client/subApps";

const SiteSideBar = (): JSX.Element => {
  const activeApp = useActiveAppStore((state) => state.activeApp);
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const setFavoriteApps = useFavoriteAppOrderStore((state) => state.setFavoriteApps);

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
        <SubAppSortableSelectMenuItem
          isSelected={activeApp === APP_ID_HOME}
          subAppID={APP_ID_HOME}
        />
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
              <SubAppSortableSelectMenuItem key={id} isSelected={activeApp === id} subAppID={id} />
            ))}
          </SortableContext>
          <DragOverlay>
            {activeID && <SubAppOverlaySelectMenuItem subAppID={activeID} />}
          </DragOverlay>
        </DndContext>

        {/* その他のアプリ */}
        <Divider className="w-4/5" />
        <SubAppSortableSelectMenuItem
          isSelected={activeApp === APP_ID_OTHER}
          subAppID={APP_ID_OTHER}
        />
      </VStack>

      {/* 設定アプリエリア */}
      <VStack align="center" py="sm" gap="sm">
        <AccountSignInButton />
        <SiteManagementButton />
      </VStack>
    </VStack>
  );
};

export { SiteSideBar };
