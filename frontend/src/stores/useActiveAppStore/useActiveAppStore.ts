import { type SubAppID } from "@portal-core";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ActiveAppState {
  activeApp: SubAppID;
}

interface ActiveAppAction {
  setActiveApp: (path: string) => void;
}

const useActiveAppStore = create<ActiveAppState & ActiveAppAction>()(
  immer((set) => ({
    activeApp: 1,
    setActiveApp: (path) =>
      set((state) => {
        const numberValue = parseInt(path, 10);
        state.activeApp = !isNaN(numberValue) ? numberValue : 0;
      }),
  })),
);

export { type ActiveAppState, type ActiveAppAction, useActiveAppStore };
