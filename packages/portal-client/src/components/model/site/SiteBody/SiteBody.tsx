import {
  type SiteBodyVariantProps as VariantProps,
  siteBodyVariants as variants,
} from "./SiteBody.variants";

type SiteBodyProps = VariantProps & {
  children: React.ReactNode;
};

const SiteBody = ({ children }: SiteBodyProps): JSX.Element => {
  /* ClassName variants */
  const { base, inner } = variants();

  return (
    <div className={base()}>
      <div className={inner()}>{children}</div>
    </div>
  );
};

export { type SiteBodyProps, SiteBody };
