import useWallpaper from "@/stores/wallpaper";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Hit } from "@/@types/wallpaper-response";
import { useTransition } from "react";

type LikeWallpaperButtonProps = {
	wallpaper: Hit;
};
const LikeWallpaperButton = ({ wallpaper }: LikeWallpaperButtonProps) => {
	const isLiked = useWallpaper((state) => state.isLiked);
	const addToFavorites = useWallpaper((state) => state.addToFavorites);
	const removeFromFavorites = useWallpaper(
		(state) => state.removeFromFavorites
	);
	const [, startTransition] = useTransition();
	const onClickHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		startTransition(() => {
			if (isLiked(wallpaper)) {
				removeFromFavorites(wallpaper);
			} else {
				addToFavorites(wallpaper);
			}
		});
	};
	return (
		<Button
			className="bg-black/20 dark:bg-black/20 cursor-pointer hover:bg-black/40 dark:hover:bg-black/40"
			variant="outline"
			size="icon"
			onClick={onClickHandler}
		>
			<Heart
				className={cn("text-white", {
					"fill-white text-white": isLiked(wallpaper),
				})}
			/>
		</Button>
	);
};
export default LikeWallpaperButton;
