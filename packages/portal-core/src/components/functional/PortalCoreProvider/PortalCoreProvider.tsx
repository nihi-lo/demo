import { useEffect } from "react";

import { EventsOn } from "@wailsjs/runtime/runtime";

import { useAuth } from "@portal-core/hooks";

interface PortalCoreProviderProps {
  children: React.ReactNode;
}

const PortalCoreProvider = ({ children }: PortalCoreProviderProps): JSX.Element => {
  const { handleSessionTokenUpdate } = useAuth();

  useEffect(() => {
    EventsOn("portal-core.onSessionTokenUpdate", handleSessionTokenUpdate);
  }, [handleSessionTokenUpdate]);

  return <>{children}</>;
};

export { PortalCoreProvider };
