import { useCallback } from "react";

import { SignIn } from "@wailsjs/go/portalcore/PortalCore";
import { WindowReload } from "@wailsjs/runtime/runtime";

interface useAuthHooks {
  signIn: () => void;
}

const useAuth = (): useAuthHooks => {
  /* Event handlers */
  const signIn = () => {
    void SignIn().then(() => {
      WindowReload();
    });
  };

  return {
    signIn: useCallback(signIn, []),
  };
};

export { useAuth };
