import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserState {
  name: string;
}

interface UserAction {
  updateName: (by: string) => void;
}

const useUserStore = create<UserState & UserAction>()(
  persist(
    immer((set) => ({
      name: "",
      updateName: (by) => set((state) => void (state.name = by)),
    })),
    { name: "userStore" },
  ),
);

export { type UserState, type UserAction, useUserStore };
