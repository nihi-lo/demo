import { type SubAppID } from "packages/portal-core/src/types/SubAppID";

interface Metadata {
  id: SubAppID;
  title: string;
  description: string;
  AppIcon: () => JSX.Element;
}

export { type Metadata };
