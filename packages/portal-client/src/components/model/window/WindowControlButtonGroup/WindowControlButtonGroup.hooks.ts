import { useWindow } from "@portal-core/hooks";

interface WindowControlButtonGroupHooks {
  windowMinimise: () => void;
  windowQuit: () => void;
  windowToggleMaximise: () => void;
}

const useWindowControlButtonGroup = (): WindowControlButtonGroupHooks => {
  /* React hooks */
  const { windowMinimise, windowQuit, windowToggleMaximise } = useWindow();

  return {
    windowMinimise: windowMinimise,
    windowQuit: windowQuit,
    windowToggleMaximise: windowToggleMaximise,
  };
};

export { type WindowControlButtonGroupHooks, useWindowControlButtonGroup };
