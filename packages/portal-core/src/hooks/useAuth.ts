import { useCallback } from "react";

import { SignIn } from "@wailsjs/go/portalcore/Core";

interface useAuthHooks {
  signIn: () => void;
}

const useAuth = (): useAuthHooks => {
  /* Event handlers */
  const signIn = () => {
    void SignIn();
  };

  return {
    signIn: useCallback(signIn, []),
  };
};

export { useAuth };
