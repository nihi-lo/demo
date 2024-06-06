import { useCallback, useEffect } from "react";

import { SignIn } from "@wailsjs/go/portalcore/Core";
import { EventsOn } from "@wailsjs/runtime/runtime";

interface useAuthHooks {
  signIn: () => void;
}

const useAuth = (): useAuthHooks => {
  useEffect(() => {
    EventsOn("portal-core.onSessionTokenUpdate", (sessionToken: string) => {
      console.log(sessionToken);
    });
  }, []);

  /* Event handlers */
  const signIn = () => {
    void SignIn();
  };

  return {
    signIn: useCallback(signIn, []),
  };
};

export { useAuth };
