import { Hit } from "@/@types/wallpaper-response";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useWallpaper from "@/stores/wallpaper";
import { Bookmark } from "lucide-react";
import { useTransition } from "react";

type SaveButtonProps = {
	wallpaper: Hit;
};
const SaveButton = ({ wallpaper }: SaveButtonProps) => {
	const isSaved = useWallpaper((state) => state.isSaved);
	const removeFromSavedWallpapers = useWallpaper(
		(state) => state.removeFromSavedWallpapers
	);
	const saveWallpaper = useWallpaper((state) => state.saveWallpaper);
	const [, startTransition] = useTransition();
	const onClickHandler = () => {
		startTransition(() => {
			if (isSaved(wallpaper)) {
				removeFromSavedWallpapers(wallpaper);
			} else {
				saveWallpaper(wallpaper);
			}
		});
	};
	return (
		<Button variant="outline" className={"flex-1"} onClick={onClickHandler}>
			<Bookmark className={cn({ "fill-primary": isSaved(wallpaper) })} />
			{isSaved(wallpaper) ? "Saved" : "Save"}
		</Button>
	);
};
export default SaveButton;
