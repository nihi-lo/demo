import { type SubAppID } from "@portal-core/types";

interface Metadata {
  id: SubAppID;
  title: string;
  description: string;
  AppIcon: () => JSX.Element;
}

export { type Metadata };
