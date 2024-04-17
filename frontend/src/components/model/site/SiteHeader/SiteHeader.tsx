import { useWindow } from "@portal-hooks";
import { HStack } from "@portal-ui";

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
      <HStack align="center" justify="center" className="h-9 w-full cursor-default select-none">
        {app && (
          <p className="text-small font-semibold text-content2-foreground">{app.metadata.title}</p>
        )}
      </HStack>
    </header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
