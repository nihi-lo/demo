import { type SubAppID } from "@portal-core";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FavoriteAppState {
  favoriteApps: SubAppID[];
}

interface FavoriteAppAction {
  setFavoriteApps: (by: SubAppID[]) => void;
}

const useFavoriteAppStore = create<FavoriteAppState & FavoriteAppAction>()(
  persist(
    immer((set) => ({
      favoriteApps: [100, 101],
      setFavoriteApps: (by) => set((state) => void (state.favoriteApps = by)),
    })),
    { name: "favoriteApps" },
  ),
);

export { type FavoriteAppState, type FavoriteAppAction, useFavoriteAppStore };
