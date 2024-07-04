import { Divider } from "@nextui-org/react";
import { TbMeat } from "react-icons/tb";

import { useOS, useWindow } from "@portal-core/hooks";
import { HStack } from "@portal-core/ui";

import { WindowControlButtonGroup } from "@portal-client/components/model/window/WindowControlButtonGroup";
import { WindowNavigationButtonGroup } from "@portal-client/components/model/window/WindowNavigationButtonGroup";
import { useActiveAppIdStore } from "@portal-client/stores/useActiveAppIdStore";
import { subApps } from "@portal-client/subapp";

import {
  type SiteHeaderVariantProps as VariantProps,
  siteHeaderVariants as variants,
} from "./SiteHeader.variants";

type SiteHeaderProps = VariantProps & {
  className?: string | undefined;
};

const SiteHeader = ({ isSticky, isGlass, className, ...props }: SiteHeaderProps): JSX.Element => {
  /* Custom hooks */
  const activeAppId = useActiveAppIdStore((state) => state.activeAppId);
  const { os } = useOS();
  const { windowQuit, windowToggleMaximise } = useWindow();

  /* ClassName variants */
  const { base } = variants({ isSticky, isGlass, className });

  const app = activeAppId ? subApps.get(activeAppId) : undefined;

  return (
    <header
      onDoubleClick={windowToggleMaximise}
      className={base()}
      style={{ widows: 1 }}
      {...props}
    >
      <HStack align="center" justify="start" className="absolute left-0 top-0 h-9 w-40">
        {os === "windows" && (
          <HStack align="center" px="sm" gap="xs">
            <div onDoubleClick={windowQuit}>
              <TbMeat className="size-6" />
            </div>
            <p className="text-medium font-semibold text-content2-foreground">Niku Portal</p>
          </HStack>
        )}
      </HStack>
      <HStack align="center" justify="center" px="sm" className="mx-40 h-9">
        {app && (
          <p className="truncate text-small font-semibold text-content2-foreground">
            {app.metadata.title}
          </p>
        )}
      </HStack>
      <HStack align="center" justify="end" className="absolute right-0 top-0 h-9 w-40">
        <WindowNavigationButtonGroup />
        {os === "windows" && (
          <>
            <Divider orientation="vertical" className="mx-1 h-2/3" />
            <WindowControlButtonGroup />
          </>
        )}
      </HStack>
    </header>
  );
};

export { type SiteHeaderProps, SiteHeader };
