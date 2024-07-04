import { tv, type VariantProps } from "tailwind-variants";

const contestSimulateButtonVariants = tv({
  slots: {
    startContent: "size-8",
  },
  variants: {
    isLoading: {
      true: {
        startContent: "hidden",
      },
    },
  },
});

type ContestSimulateButtonVariantProps = VariantProps<typeof contestSimulateButtonVariants>;

export { contestSimulateButtonVariants, type ContestSimulateButtonVariantProps };
