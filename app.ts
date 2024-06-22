import { type SubAppID, type Metadata } from "@portal-core/types";

import { App as AboutApp, metadata as aboutAppMetadata } from "@sub-app/about-app/App";
import { App as HomeApp, metadata as homeAppMetadata } from "@sub-app/home-app/App";
import { App as NotfoundApp, metadata as notfoundAppMetadata } from "@sub-app/notfound-app/App";
import { App as OtherAppsApp, metadata as otherAppsAppMetadata } from "@sub-app/otherapps-app/App";

export const APP_ID_NOTFOUND = notfoundAppMetadata.id;
export const APP_ID_HOME = homeAppMetadata.id;
export const APP_ID_OTHER = otherAppsAppMetadata.id;

export const subApps = new Map<SubAppID, { metadata: Metadata; Page: () => JSX.Element }>([
  /* 基本アプリ */
  [APP_ID_NOTFOUND, { metadata: notfoundAppMetadata, Page: NotfoundApp }],
  [APP_ID_HOME, { metadata: homeAppMetadata, Page: HomeApp }],
  [APP_ID_OTHER, { metadata: otherAppsAppMetadata, Page: OtherAppsApp }],

  /* サブアプリ */
  [aboutAppMetadata.id, { metadata: aboutAppMetadata, Page: AboutApp }],
]);
