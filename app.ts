import { type SubAppID, type Metadata } from "@portal-core/types";

import { App as AboutApp, metadata as aboutAppMetadata } from "@sub-app/about-app/App";
import { App as GakusimApp, metadata as gakusimAppMetadata } from "@sub-app/gakusim-app/App";
import { App as HomeApp, metadata as homeAppMetadata } from "@sub-app/home-app/App";

export const APP_ID_HOME = homeAppMetadata.id;

export const subApps = new Map<SubAppID, { metadata: Metadata; Page: () => JSX.Element }>([
  /* 基本アプリ */
  [APP_ID_HOME, { metadata: homeAppMetadata, Page: HomeApp }],

  /* サブアプリ */
  // SUB_APP_ENTRY_REGISTRATION_START
  [aboutAppMetadata.id, { metadata: aboutAppMetadata, Page: AboutApp }],
  [gakusimAppMetadata.id, { metadata: gakusimAppMetadata, Page: GakusimApp }],
  // SUB_APP_REGISTRATION_END
]);
