import { useLayoutEffect, useState } from "react";

import { GetOS } from "@wailsjs/go/portalcore/Core";

type OS = "undetermined" | "macos" | "windows";

interface OSHooks {
  os: OS;
}

const useOS = (): OSHooks => {
  const [os, setOS] = useState<OS>("undetermined");

  useLayoutEffect(() => {
    void GetOS().then((os) => {
      switch (os) {
        case "windows":
          setOS("windows");
          break;
        case "macos":
          setOS("macos");
          break;
        default:
          setOS("undetermined");
          break;
      }
    });
  }, []);

  return {
    os,
  };
};

export { type OS, type OSHooks, useOS };
