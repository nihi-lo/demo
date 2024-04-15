import { App as AboutApp, appMedadata as AboutAppMedadata } from "@packages/about-app";
import { App as HomeApp, appMedadata as HomeAppMedadata } from "@packages/home-app";
import { App as NotfoundApp, appMedadata as NotfoundAppMedadata } from "@packages/notfound-app";
import { App as OtherAppsApp, appMedadata as OtherAppsAppMedadata } from "@packages/otherapps-app";
import { type SubAppID, type Metadata } from "@packages/portal-core";

const subApps = new Map<SubAppID, { metadata: Metadata; Page: () => JSX.Element }>([
  /* 標準アプリ */
  [0, { metadata: NotfoundAppMedadata, Page: NotfoundApp }],
  [1, { metadata: HomeAppMedadata, Page: HomeApp }],
  [2, { metadata: OtherAppsAppMedadata, Page: OtherAppsApp }],

  /* サブアプリ */
  [100, { metadata: AboutAppMedadata, Page: AboutApp }],
]);

export { subApps };
