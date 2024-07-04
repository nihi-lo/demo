import { type ViewModelFunc } from "@portal-core/types";

import { useContestResultStore } from "@sub-app/gakusim-app/stores/contestResultStore";

import { type ContestSimulateButtonVariantProps } from "./ContestSimulateButton.variants";

interface State {
  isLoading: boolean;
  variantProps: ContestSimulateButtonVariantProps;
}

interface Action {
  SimulateContest: () => void;
}

const useContestSimulateButton: ViewModelFunc<State, Action> = () => {
  const isLoading = useContestResultStore((state) => state.isLoading);
  const SimulateContestAsync = useContestResultStore((state) => state.SimulateContestAsync);

  return {
    state: {
      isLoading,
      variantProps: {
        isLoading,
      },
    },
    action: {
      SimulateContest: () => void SimulateContestAsync(),
    },
  };
};

export { useContestSimulateButton };
