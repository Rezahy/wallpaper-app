import { WallpaperResponse } from "@/@types/wallpaper-response";
import { AnimatePresence } from "motion/react";
import WallpaperListItem from "./wallpaper-list-item";

type WallpaperListProps = {
	data: WallpaperResponse;
};
const WallpaperList = ({ data }: WallpaperListProps) => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  py-7 pb-10">
			<AnimatePresence>
				{data?.hits.map((wallpaper, index) => (
					<WallpaperListItem
						wallpaper={wallpaper}
						index={index}
						key={wallpaper.id}
					/>
				))}
			</AnimatePresence>
		</section>
	);
};
export default WallpaperList;
