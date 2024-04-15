import { tv, type VariantProps } from "tailwind-variants";

const subAppSelectMenuItemVariants = tv({
  slots: {
    iconWrapper: "peer size-12 overflow-hidden",
    selectionState: "h-2 w-1",
  },
  variants: {
    disableAnimation: {
      true: {
        iconWrapper: "rounded-3xl transition-none",
        selectionState: "transition-none",
      },
      false: {
        iconWrapper: "rounded-3xl transition-all hover:rounded-large",
        selectionState: "transition-all",
      },
    },
    hideSelectionState: {
      true: {
        selectionState: "bg-transparent",
      },
      false: {
        selectionState:
          "rounded-e-full bg-divider peer-hover:h-4 peer-hover:bg-content2-foreground",
      },
    },
  },
});

type SubAppSelectMenuItemVariantProps = VariantProps<typeof subAppSelectMenuItemVariants>;

export { subAppSelectMenuItemVariants, type SubAppSelectMenuItemVariantProps };
