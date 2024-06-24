import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type SessionStatus, type Session } from "@portal-core/types";

interface SessionState {
  session: Session | undefined | null;
  status: SessionStatus;
}

interface SessionAction {
  updateSession: (session: Session, status: SessionStatus) => void;
}

const useSessionStore = create<SessionState & SessionAction>()(
  immer((set) => ({
    session: null,
    status: "unauthenticated",
    updateSession: (session, status) =>
      set((state) => {
        switch (status) {
          case "loading":
            state.session = undefined;
            break;
          case "unauthenticated":
            state.session = null;
            break;
          case "authenticated":
            state.session = session;
            break;
        }
        state.status = status;
      }),
  })),
);

export { useSessionStore };
