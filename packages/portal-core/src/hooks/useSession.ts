import { useSessionStore } from "@portal-core/stores";
import { type SessionStatus, type Session } from "@portal-core/types";

interface useSessionHooks {
  data: Session | undefined | null;
  status: SessionStatus;
}

const useSession = (): useSessionHooks => {
  const session = useSessionStore((state) => state.session);
  const status = useSessionStore((state) => state.status);

  return {
    data: session,
    status: status,
  };
};

export { useSession };
