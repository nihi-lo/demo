import { useWindow } from "@portal-hooks";
import { HStack } from "@portal-ui";

import {
  type SiteHeaderVariantProps as VariantProps,
  siteHeaderVariants as variants,
} from "./SiteHeader.variants";

type SiteHeaderProps = VariantProps & {
  className?: string | undefined;
};

const SiteHeader = ({ isSticky, isGlass, className, ...props }: SiteHeaderProps): JSX.Element => {
  /* Custom hooks */
  const { windowToggleMaximise } = useWindow();

  /* ClassName variants */
  const { base } = variants();

  return (
    <header
      onDoubleClick={windowToggleMaximise}
      className={base({ isSticky, isGlass, className })}
      style={{ widows: 1 }}
      {...props}
    >
      <HStack
        align="center"
        justify="between"
        className="h-9 w-full cursor-default select-none"
      ></HStack>
    </header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
