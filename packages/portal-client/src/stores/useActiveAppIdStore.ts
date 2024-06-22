import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@portal-core/types";

import { APP_ID_HOME } from "@portal-client/subapp";

interface ActiveAppIdState {
  activeAppId: SubAppID;
}

interface ActiveAppIdAction {
  setActiveAppId: (appId: string) => void;
}

const useActiveAppIdStore = create<ActiveAppIdState & ActiveAppIdAction>()(
  immer((set) => ({
    activeAppId: APP_ID_HOME,
    setActiveAppId: (appId) => set((state) => void (state.activeAppId = appId)),
  })),
);

export { useActiveAppIdStore };
