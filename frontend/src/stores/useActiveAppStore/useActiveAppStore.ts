import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@packages/portal-core";

interface ActiveAppState {
  activeApp: SubAppID;
}

interface ActiveAppAction {
  setActiveApp: (path: string) => void;
}

const useActiveAppStore = create<ActiveAppState & ActiveAppAction>()(
  persist(
    immer((set) => ({
      activeApp: 1,
      setActiveApp: (path) =>
        set((state) => {
          const numberValue = parseInt(path, 10);
          state.activeApp = !isNaN(numberValue) ? numberValue : 0;
        }),
    })),
    { name: "activeApp" },
  ),
);

export { type ActiveAppState, type ActiveAppAction, useActiveAppStore };
