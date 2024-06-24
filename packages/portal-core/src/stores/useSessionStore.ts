import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type SessionStatus, type Session } from "@portal-core/types";

interface SessionState {
  session: Session | undefined | null;
  status: SessionStatus;
}

interface SessionAction {
  updateSession: (session: Session) => void;
}

const useSessionStore = create<SessionState & SessionAction>()(
  immer((set) => ({
    session: null,
    status: "unauthenticated",
    updateSession: (session) =>
      set((state) => {
        state.session = session?.user.name === "" ? null : session;
        state.status = session?.user.name === "" ? "unauthenticated" : "authenticated";
      }),
  })),
);

export { useSessionStore };
