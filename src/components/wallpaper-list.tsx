import { Hit } from "@/@types/wallpaper-response";
import { AnimatePresence, motion } from "motion/react";
import WallpaperListItem from "./wallpaper-list-item";
import EmptyView from "./empty-view";

type WallpaperListProps = {
	data: Hit[];
	animated?: boolean;
};
const WallpaperList = ({ data, animated = false }: WallpaperListProps) => {
	if (data.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<EmptyView>We can't find any wallpaper</EmptyView>
			</motion.div>
		);
	}
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  py-7 pb-10">
			<AnimatePresence>
				{data.map((wallpaper, index) => (
					<motion.div layout key={wallpaper.id}>
						<WallpaperListItem
							key={wallpaper.id}
							wallpaper={wallpaper}
							index={index}
							animated={animated}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</section>
	);
};
export default WallpaperList;
