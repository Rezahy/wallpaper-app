import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Hit } from "@/@types/wallpaper-response";
import SaveWallpaperButton from "./save-wallpaper-button";
import LikeWallpaperButton from "./like-wallpaper-button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

const MotionComponent = motion.create(Link);
type WallpaperListItemProps = {
	wallpaper: Hit;
	index: number;
	animated: boolean;
};
const WallpaperListItem = ({
	wallpaper,
	index,
	animated,
}: WallpaperListItemProps) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	return (
		<MotionComponent
			to={`/wallpaper/${wallpaper.id}`}
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.25,
				delay: index / 10,
			}}
			exit={animated ? { opacity: 0 } : {}}
		>
			<Card className="group p-0 overflow-hidden relative">
				{/* <img
					src={wallpaper.webformatURL}
					alt=""
					loading="lazy"
					className="h-[350px] object-cover group-hover:scale-115 transition-all duration-500"
				/> */}

				{isImageLoaded ? (
					<LazyLoadImage
						src={wallpaper.webformatURL}
						alt={`wallpaper - ${wallpaper.id}`}
						loading="lazy"
						effect="blur"
						className="h-[350px] w-full object-cover group-hover:scale-115 group-active:scale-115 transition-all duration-500"
						style={{
							transitionProperty: "all",
							transitionTimingFunction:
								"var(--tw-ease, var(--default-transition-timing-function)",
							transitionDuration: "500ms",
						}}
					/>
				) : (
					<Skeleton className="rounded-xl shadow-sm h-[350px]">
						<img
							src={wallpaper.webformatURL}
							alt=""
							className="hidden"
							onLoad={() => setIsImageLoaded(true)}
						/>
					</Skeleton>
				)}

				{isImageLoaded && (
					<>
						<span className="absolute top-0 left-0 right-0 h-[60px] opacity-0 transition-opacity duration-400 group-active:opacity-100 group-hover:opacity-100 bg-gradient-to-b from-[#191b26]/90 from-0% to-transparent to-100%"></span>
						<div className="absolute top-2 left-2 space-x-3 opacity-0 group-active:opacity-100 group-hover:opacity-100 transition-opacity duration-400">
							<SaveWallpaperButton wallpaper={wallpaper} />
							<LikeWallpaperButton wallpaper={wallpaper} />
						</div>
					</>
				)}
			</Card>
		</MotionComponent>
	);
};
export default WallpaperListItem;
