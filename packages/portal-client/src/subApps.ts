import { type SubAppID, type Metadata } from "@portal-core/types";

import { App as AboutApp, metadata as AboutAppMetadata } from "@sub-app/about-app/App";
import { App as HomeApp, metadata as HomeAppMetadata } from "@sub-app/home-app/App";
import { App as NotfoundApp, metadata as NotfoundAppMetadata } from "@sub-app/notfound-app/App";
import { App as OtherAppsApp, metadata as OtherAppsAppMetadata } from "@sub-app/otherapps-app/App";

export const APP_ID_NOTFOUND = 0;
export const APP_ID_HOME = 1;
export const APP_ID_OTHER = 2;

export const subApps = new Map<SubAppID, { metadata: Metadata; Page: () => JSX.Element }>([
  /* 標準アプリ */
  [APP_ID_NOTFOUND, { metadata: NotfoundAppMetadata, Page: NotfoundApp }],
  [APP_ID_HOME, { metadata: HomeAppMetadata, Page: HomeApp }],
  [APP_ID_OTHER, { metadata: OtherAppsAppMetadata, Page: OtherAppsApp }],

  /* サブアプリ */
  [100, { metadata: AboutAppMetadata, Page: AboutApp }],
]);
