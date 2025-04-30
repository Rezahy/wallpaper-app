import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Hit } from "@/@types/wallpaper-response";
import useWallpaper from "@/stores/wallpaper";
import { cn } from "@/lib/utils";

type SaveWallpaperButtonProps = {
	wallpaper: Hit;
};
const SaveWallpaperButton = ({ wallpaper }: SaveWallpaperButtonProps) => {
	const isSaved = useWallpaper((state) => state.isSaved);
	const saveWallpaper = useWallpaper((state) => state.saveWallpaper);
	const removeFromSavedWallpapers = useWallpaper(
		(state) => state.removeFromSavedWallpapers
	);
	useWallpaper((state) => state.savedWallpapers);

	const onClickHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (isSaved(wallpaper)) {
			removeFromSavedWallpapers(wallpaper);
		} else {
			saveWallpaper(wallpaper);
		}
	};
	return (
		<Button
			className="bg-black/20 dark:bg-black/20 cursor-pointer hover:bg-black/40 dark:hover:bg-black/40"
			variant="outline"
			size="icon"
			onClick={onClickHandler}
		>
			<Bookmark
				className={cn("text-white", {
					"fill-white text-white": isSaved(wallpaper),
				})}
			/>
		</Button>
	);
};
export default SaveWallpaperButton;
