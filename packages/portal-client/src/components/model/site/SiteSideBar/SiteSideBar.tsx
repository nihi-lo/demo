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
import { useActiveAppIdStore } from "@portal-client/stores/useActiveAppIdStore";
import { useFavoriteAppOrderStore } from "@portal-client/stores/useFavoriteAppOrderStore";
import { APP_ID_HOME } from "@portal-client/subapp";

const SiteSideBar = (): JSX.Element => {
  const activeAppId = useActiveAppIdStore((state) => state.activeAppId);
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
          isSelected={activeAppId === APP_ID_HOME}
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
            {favoriteApps.map((appId) => (
              <SubAppSortableSelectMenuItem
                key={appId}
                isSelected={activeAppId === appId}
                subAppID={appId}
              />
            ))}
          </SortableContext>
          <DragOverlay>
            {activeID && <SubAppOverlaySelectMenuItem subAppID={activeID} />}
          </DragOverlay>
        </DndContext>
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
