import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@portal-core/types";

interface FavoriteAppOrderState {
  favoriteApps: SubAppID[];
}

interface FavoriteAppOrderAction {
  setFavoriteApps: (by: SubAppID[]) => void;
}

const useFavoriteAppOrderStore = create<FavoriteAppOrderState & FavoriteAppOrderAction>()(
  persist(
    immer((set) => ({
      favoriteApps: ["cba33044-b71f-aebe-03bd-317228109543"],
      setFavoriteApps: (by) => set((state) => void (state.favoriteApps = by)),
    })),
    { name: "portal-client.favorite-app-order" },
  ),
);

export { useFavoriteAppOrderStore };
