import { useWindow } from "@portal-core/hooks";

interface WindowControlButtonGroupHooks {
  isMaximised: boolean;

  windowMinimise: () => void;
  windowQuit: () => void;
  windowToggleMaximise: () => void;
}

const useWindowControlButtonGroup = (): WindowControlButtonGroupHooks => {
  /* React hooks */
  const { isMaximised, windowMinimise, windowQuit, windowToggleMaximise } = useWindow();

  return { isMaximised, windowMinimise, windowQuit, windowToggleMaximise };
};

export { type WindowControlButtonGroupHooks, useWindowControlButtonGroup };
