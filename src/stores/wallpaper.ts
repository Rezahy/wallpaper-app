import { Hit } from "@/@types/wallpaper-response";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	favoriteWallpapers: Hit[];
	savedWallpapers: Hit[];
};

type Actions = {
	addToFavorites: (wallpaper: Hit) => void;
	removeFromFavorites: (wallpaper: Hit) => void;
	saveWallpaper: (wallpaper: Hit) => void;
	removeFromSavedWallpapers: (wallpaper: Hit) => void;
	isSaved: (wallpaper: Hit) => boolean;
	isLiked: (wallpaper: Hit) => boolean;
};

const useWallpaper = create<State & Actions>()(
	persist(
		(set, get) => ({
			favoriteWallpapers: [],
			savedWallpapers: [],
			addToFavorites: (wallpaper: Hit) => {
				set((state) => ({
					favoriteWallpapers: [wallpaper, ...state.favoriteWallpapers],
				}));
			},
			removeFromFavorites: (wallpaper: Hit) => {
				set((state) => ({
					favoriteWallpapers: state.favoriteWallpapers.filter(
						(fw) => fw.id !== wallpaper.id
					),
				}));
			},
			saveWallpaper: (wallpaper: Hit) => {
				set((state) => ({
					savedWallpapers: [wallpaper, ...state.savedWallpapers],
				}));
			},
			removeFromSavedWallpapers: (wallpaper: Hit) => {
				set((state) => ({
					savedWallpapers: state.savedWallpapers.filter(
						(sw) => sw.id !== wallpaper.id
					),
				}));
			},
			isSaved: (wallpaper: Hit) =>
				get().savedWallpapers.some((item) => item.id === wallpaper.id),
			isLiked: (wallpaper: Hit) =>
				get().favoriteWallpapers.some((item) => item.id === wallpaper.id),
		}),
		{ name: "@wallpaper-app:wallpaper-state-1.0.0", version: 1 }
	)
);

export default useWallpaper;
