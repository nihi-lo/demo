import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Session } from "@portal-core/types";

interface SessionState {
  session: Session | null;
}

interface SessionAction {
  updateSession: (session: Session | null) => void;
}

const useSessionStore = create<SessionState & SessionAction>()(
  immer((set) => ({
    session: null,
    updateSession: (session) =>
      set((state) => void (state.session = session?.user.name === "" ? null : session)),
  })),
);

export { useSessionStore };
