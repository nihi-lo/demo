import { useWindow } from "@portal-core/hooks";
import { HStack } from "@portal-core/ui";

import { useActiveAppStore } from "@portal-client/stores/useActiveAppStore";
import { APP_ID_NOTFOUND, subApps } from "@portal-client/subApps";

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
      <HStack align="center" justify="start" className="absolute left-0 top-0 h-9 w-40">
        {/* ヘッダー左端のコンテンツ */}
      </HStack>
      <HStack align="center" justify="center" px="sm" className="mx-40 h-9">
        {app && (
          <p className="truncate text-small font-semibold text-content2-foreground">
            {app.metadata.title}
          </p>
        )}
      </HStack>
      <HStack align="center" justify="end" className="absolute right-0 top-0 h-9 w-40">
        {/* ヘッダー右端のコンテンツ */}
      </HStack>
    </header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
