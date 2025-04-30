import EmptyView from "@/components/empty-view";
import WallpaperList from "@/components/wallpaper-list";
import useWallpaper from "@/stores/wallpaper";
import { motion } from "motion/react";

const FavoritePage = () => {
	const favoriteWallpapers = useWallpaper((state) => state.favoriteWallpapers);
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold pt-7 pb-5">
					Favorite Wallpapers
				</h1>
			</header>
			{favoriteWallpapers.length > 0 ? (
				<WallpaperList data={favoriteWallpapers} />
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<EmptyView>Your Favorite Wallpaper List is Empty</EmptyView>
				</motion.div>
			)}
		</section>
	);
};
export default FavoritePage;
