import { tv, type VariantProps } from "tailwind-variants";

const subAppSelectMenuItemVariants = tv({
  slots: {
    iconWrapper: "peer size-12 overflow-hidden rounded-large",
    selectionState:
      "h-2 w-1 rounded-e-full bg-divider peer-hover:h-4 peer-hover:bg-content2-foreground",
  },
  variants: {
    disableAnimation: {
      true: {
        selectionState: "transition-none",
      },
      false: {
        selectionState: "transition-all",
      },
    },
    isSelected: {
      true: {
        selectionState:
          "h-8 bg-content2-foreground peer-hover:h-8 peer-hover:bg-content2-foreground",
      },
    },
    hideSelectionState: {
      true: {
        selectionState: "bg-transparent peer-hover:bg-transparent",
      },
    },
  },
});

type SubAppSelectMenuItemVariantProps = VariantProps<typeof subAppSelectMenuItemVariants>;

export { subAppSelectMenuItemVariants, type SubAppSelectMenuItemVariantProps };
