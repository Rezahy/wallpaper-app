import EmptyView from "@/components/empty-view";
import WallpaperList from "@/components/wallpaper-list";
import useWallpaper from "@/stores/wallpaper";
import { motion } from "motion/react";

const SavedWallpapersPage = () => {
	const savedWallpapers = useWallpaper((state) => state.savedWallpapers);
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold pt-7 pb-5">Saved Wallpapers</h1>
			</header>
			{savedWallpapers.length > 0 ? (
				<WallpaperList data={savedWallpapers} animated />
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<EmptyView>Your Saved Wallpaper List is Empty</EmptyView>
				</motion.div>
			)}
		</section>
	);
};
export default SavedWallpapersPage;
