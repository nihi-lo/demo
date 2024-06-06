import { type SubAppID, type Metadata } from "@portal-core/types";

import { App as AboutApp, appMedadata as AboutAppMedadata } from "@packages/about-app";
import { App as HomeApp, appMedadata as HomeAppMedadata } from "@packages/home-app";
import { App as NotfoundApp, appMedadata as NotfoundAppMedadata } from "@packages/notfound-app";
import { App as OtherAppsApp, appMedadata as OtherAppsAppMedadata } from "@packages/otherapps-app";

export const APP_ID_NOTFOUND = 0;
export const APP_ID_HOME = 1;
export const APP_ID_OTHER = 2;

export const subApps = new Map<SubAppID, { metadata: Metadata; Page: () => JSX.Element }>([
  /* 標準アプリ */
  [APP_ID_NOTFOUND, { metadata: NotfoundAppMedadata, Page: NotfoundApp }],
  [APP_ID_HOME, { metadata: HomeAppMedadata, Page: HomeApp }],
  [APP_ID_OTHER, { metadata: OtherAppsAppMedadata, Page: OtherAppsApp }],

  /* サブアプリ */
  [100, { metadata: AboutAppMedadata, Page: AboutApp }],
]);
