import { Hit } from "@/@types/wallpaper-response";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useWallpaper from "@/stores/wallpaper";
import { Heart } from "lucide-react";
type LikeButtonProps = {
	likes: number;
	wallpaper: Hit;
};
const LikeButton = ({ likes, wallpaper }: LikeButtonProps) => {
	useWallpaper((state) => state.favoriteWallpapers);
	const isLiked = useWallpaper((state) => state.isLiked);
	const removeFromFavorites = useWallpaper(
		(state) => state.removeFromFavorites
	);
	const addToFavorites = useWallpaper((state) => state.addToFavorites);
	const onClickHandler = () => {
		if (isLiked(wallpaper)) {
			removeFromFavorites(wallpaper);
		} else {
			addToFavorites(wallpaper);
		}
	};
	return (
		<Button
			variant="outline"
			className={cn("flex-1", {
				"border-[#B8336A] bg-[#B8336A] hover:bg-[#B8336A] text-white hover:text-white dark:border-[#B8336A] dark:bg-[#B8336A] dark:hover:text-white dark:text-white dark:hover:bg-[#B8336A]":
					isLiked(wallpaper),
			})}
			onClick={onClickHandler}
		>
			<Heart className={cn({ "fill-white text-white": isLiked(wallpaper) })} />
			{isLiked(wallpaper) ? likes + 1 : likes}
		</Button>
	);
};
export default LikeButton;
