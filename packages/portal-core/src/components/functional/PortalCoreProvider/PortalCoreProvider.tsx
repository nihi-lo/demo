import { useEffect } from "react";

import { EventsOn } from "@wailsjs/runtime/runtime";

import { useSessionStore } from "@portal-core/stores";

interface PortalCoreProviderProps {
  children: React.ReactNode;
}

const PortalCoreProvider = ({ children }: PortalCoreProviderProps): JSX.Element => {
  const updateSession = useSessionStore((state) => state.updateSession);

  useEffect(() => {
    EventsOn("portal-core.onSessionTokenUpdate", updateSession);
  }, [updateSession]);

  return <>{children}</>;
};

export { PortalCoreProvider };
