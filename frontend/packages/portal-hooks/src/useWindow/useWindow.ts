import { useCallback, useLayoutEffect, useState } from "react";

import {
  WindowIsFullscreen,
  WindowIsMaximised,
  WindowToggleMaximise,
} from "@wailsjs/runtime/runtime";

interface useWindowHooks {
  isFullscreen: boolean;
  isMaximised: boolean;
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
  const windowToggleMaximise = () => {
    WindowToggleMaximise();
  };

  return {
    isFullscreen,
    isMaximised,
    windowToggleMaximise: useCallback(windowToggleMaximise, []),
  };
};

export { useWindow };
