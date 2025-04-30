import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Hit } from "@/@types/wallpaper-response";
import BookmarkWallpaperButton from "./bookmark-wallpaper-button";
import LikeWallpaperButton from "./like-wallpaper-button";
import { Link } from "react-router-dom";

const MotionComponent = motion.create(Link);
type WallpaperListItemProps = {
	wallpaper: Hit;
	index: number;
};
const WallpaperListItem = ({ wallpaper, index }: WallpaperListItemProps) => {
	return (
		<MotionComponent
			to="/asd"
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.25,
				delay: index / 10,
			}}
			exit={{ opacity: 0 }}
		>
			<Card className="group p-0 overflow-hidden relative">
				<img
					src={wallpaper.webformatURL}
					alt=""
					loading="lazy"
					className="h-[350px] object-cover group-hover:scale-115 transition-all duration-500"
				/>
				<span className="absolute top-0 left-0 right-0 h-[60px] opacity-0 transition-opacity duration-400 group-hover:opacity-100 bg-gradient-to-b from-[#191b26]/90 from-0% to-transparent to-100%"></span>
				<div className="absolute top-2 left-2 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
					<BookmarkWallpaperButton />
					<LikeWallpaperButton />
				</div>
			</Card>
		</MotionComponent>
	);
};
export default WallpaperListItem;
