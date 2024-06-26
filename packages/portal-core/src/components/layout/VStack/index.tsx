import React from "react";

import { type VStackVariantProps as VariantProps, vStackVariants as variants } from "./variants";

interface VStackProps
  extends Omit<React.ComponentPropsWithoutRef<"aside" | "div" | "main">, "style">,
    VariantProps {
  as?: "aside" | "div" | "main";
}

const VStack = ({
  align,
  justify,
  wrap,
  gap,
  p,
  px,
  py,
  pt,
  grow,
  children,
  className,
  as: Tag = "div",
  ...props
}: VStackProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...props}>
      {children}
    </Tag>
  );
};

export { type VStackProps, VStack };
