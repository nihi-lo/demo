import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { SimulateContest } from "@wailsjs/go/gakusimapp/App";

import { type SimulateContestResponse } from "@sub-app/gakusim-app/types/simulateContest";

interface State {
  isLoading: boolean;
}

interface Action {
  SimulateContestAsync: () => Promise<void>;
}

const useContestResultStore = create<State & Action>()(
  immer((set) => ({
    // State
    isLoading: false,

    // Action
    SimulateContestAsync: async () => {
      set((state) => void (state.isLoading = true));
      try {
        const result = await SimulateContest();
        const res = JSON.parse(result) as SimulateContestResponse;
        console.log(res);
      } finally {
        set((state) => void (state.isLoading = false));
      }
    },
  })),
);

export { useContestResultStore };
