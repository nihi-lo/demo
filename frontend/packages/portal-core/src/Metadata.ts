import { type SubAppKey } from "@packages/portal-core";

interface Metadata {
  key: SubAppKey;
  title: string;
  description: string;
  AppIcon: () => JSX.Element;
}

export { type Metadata };
