import FavoritePage from "@/app/favorite/page";
import NotFound from "@/app/not-found";
import HomePage from "@/app/page";
import WallpaperDetails from "@/app/wallpaper/[id]/page";
import { Navigate, RouteObject } from "react-router-dom";
const router: RouteObject[] = [
	{ path: "/", element: <HomePage /> },
	{ path: "/wallpaper/:id", element: <WallpaperDetails /> },
	{ path: "/favorite", element: <FavoritePage /> },
	{ path: "/notfound", element: <NotFound /> },
	{ path: "*", element: <Navigate to="/notfound" replace /> },
];

export default router;
