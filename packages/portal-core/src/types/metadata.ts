import { type SubAppID } from "packages/portal-core/src/types/subAppID";

interface Metadata {
  id: SubAppID;
  title: string;
  description: string;
  AppIcon: () => JSX.Element;
}

export { type Metadata };
