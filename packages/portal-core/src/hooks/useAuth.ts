import { useCallback } from "react";

import { SignIn } from "@wailsjs/go/portalcore/Core";

interface useAuthHooks {
  handleSessionTokenUpdate: (sessionToken: string) => void;
  signIn: () => void;
}

const useAuth = (): useAuthHooks => {
  /* Event handlers */
  const handleSessionTokenUpdate = (sessionToken: string): void => {
    console.log(sessionToken);
  };
  const signIn = () => {
    void SignIn();
  };

  return {
    handleSessionTokenUpdate: useCallback(handleSessionTokenUpdate, []),
    signIn: useCallback(signIn, []),
  };
};

export { useAuth };
