import { type SubAppID, type Metadata } from "@portal-core/types";

import { App as AboutApp } from "@sub-app/about-app/App";
import { appMedadata as AboutAppMedadata } from "@sub-app/about-app/metadata";
import { App as HomeApp } from "@sub-app/home-app/App";
import { appMedadata as HomeAppMedadata } from "@sub-app/home-app/metadata";
import { App as NotfoundApp } from "@sub-app/notfound-app/App";
import { appMedadata as NotfoundAppMedadata } from "@sub-app/notfound-app/metadata";
import { App as OtherAppsApp } from "@sub-app/otherapps-app/App";
import { appMedadata as OtherAppsAppMedadata } from "@sub-app/otherapps-app/metadata";

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
