import { useCallback, useLayoutEffect, useState } from "react";

import { WindowIsFullscreen, WindowToggleMaximise } from "@wailsjs/runtime/runtime";

interface useWindowHooks {
  isFullscreen: boolean;
  windowToggleMaximise: () => void;
}

const useWindow = (): useWindowHooks => {
  /* React hooks */
  const [isFullscreen, setIsFullscreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      void WindowIsFullscreen().then(setIsFullscreen);
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
    windowToggleMaximise: useCallback(windowToggleMaximise, []),
  };
};

export { useWindow };
