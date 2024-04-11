import { tv, type VariantProps } from "tailwind-variants";

const siteBodyVariants = tv({
  slots: {
    base: "size-full overflow-hidden overscroll-none rounded-tl-2xl bg-background",
    inner: "size-full overflow-auto",
  },
  variants: {},
});

type SiteBodyVariantProps = VariantProps<typeof siteBodyVariants>;

export { siteBodyVariants, type SiteBodyVariantProps };
