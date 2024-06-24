import { useCallback, useLayoutEffect, useState } from "react";

import {
  Quit,
  WindowIsFullscreen,
  WindowIsMaximised,
  WindowMinimise,
  WindowToggleMaximise,
} from "@wailsjs/runtime/runtime";

interface useWindowHooks {
  isFullscreen: boolean;
  isMaximised: boolean;
  windowMinimise: () => void;
  windowQuit: () => void;
  windowToggleMaximise: () => void;
}

const useWindow = (): useWindowHooks => {
  /* React hooks */
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMaximised, setIsMaximised] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      void WindowIsFullscreen().then(setIsFullscreen);
      void WindowIsMaximised().then(setIsMaximised);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Event handlers */
  const windowMinimise = () => {
    WindowMinimise();
  };
  const windowQuit = () => {
    Quit();
  };
  const windowToggleMaximise = () => {
    WindowToggleMaximise();
  };

  return {
    isFullscreen,
    isMaximised,
    windowMinimise: useCallback(windowMinimise, []),
    windowQuit: useCallback(windowQuit, []),
    windowToggleMaximise: useCallback(windowToggleMaximise, []),
  };
};

export { useWindow };
