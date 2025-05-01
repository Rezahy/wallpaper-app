import CategoryPage from "@/app/category/[name]/page";
import ColorPage from "@/app/color/[name]/page";
import FavoritePage from "@/app/favorite/page";
import NotFound from "@/app/not-found";
import HomePage from "@/app/page";
import SavedWallpapersPage from "@/app/saved/page";
import WallpaperDetailsPage from "@/app/wallpaper/[id]/page";
import { Navigate, RouteObject } from "react-router-dom";
const router: RouteObject[] = [
	{ path: "/", element: <HomePage /> },
	{ path: "/wallpaper/:id", element: <WallpaperDetailsPage /> },
	{ path: "/saved", element: <SavedWallpapersPage /> },
	{ path: "/favorite", element: <FavoritePage /> },
	{ path: "/category/:name", element: <CategoryPage /> },
	{ path: "/color/:name", element: <ColorPage /> },
	{ path: "/notfound", element: <NotFound /> },
	{ path: "*", element: <Navigate to="/notfound" replace /> },
];

export default router;
