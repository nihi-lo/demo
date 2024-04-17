import { useWindow } from "@portal-hooks";

import { HStack } from "@packages/portal-ui";

import { useActiveAppStore } from "@portal-app/stores/useActiveAppStore";
import { APP_ID_NOTFOUND, subApps } from "@portal-app/subApps";

import {
  type SiteHeaderVariantProps as VariantProps,
  siteHeaderVariants as variants,
} from "./SiteHeader.variants";

type SiteHeaderProps = VariantProps & {
  className?: string | undefined;
};

const SiteHeader = ({ isSticky, isGlass, className, ...props }: SiteHeaderProps): JSX.Element => {
  /* Custom hooks */
  const activeApp = useActiveAppStore((state) => state.activeApp);
  const { windowToggleMaximise } = useWindow();

  /* ClassName variants */
  const { base } = variants({ isSticky, isGlass, className });

  const app = subApps.get(activeApp) ?? subApps.get(APP_ID_NOTFOUND);

  return (
    <header
      onDoubleClick={windowToggleMaximise}
      className={base()}
      style={{ widows: 1 }}
      {...props}
    >
      <div className="absolute left-0 top-0 size-max h-9 w-40">
        {/* ヘッダー左端のコンテンツ */}
      </div>
      <HStack
        align="center"
        justify="center"
        px="sm"
        className="mx-40 h-9 cursor-default select-none"
      >
        {app && (
          <p className="truncate text-small font-semibold text-content2-foreground">
            {app.metadata.title}
          </p>
        )}
      </HStack>
      <div className="absolute right-0 top-0 size-max h-9 w-40">
        {/* ヘッダー右端のコンテンツ */}
      </div>
    </header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
