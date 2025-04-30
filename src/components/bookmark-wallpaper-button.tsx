import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";

const BookmarkWallpaperButton = () => {
	return (
		<Button
			// className="xl:scale-0 xl:opacity-0 cursor-pointer absolute top-2 right-2  dark:bg-black/50  dark:hover:bg-black/75 group-hover:scale-100 group-hover:opacity-100 duration-300"
			className="bg-black/20 dark:bg-black/20 cursor-pointer hover:bg-black/40 dark:hover:bg-black/40"
			variant="outline"
			size="icon"
		>
			<Bookmark className="fill-white text-white" />
		</Button>
	);
};
export default BookmarkWallpaperButton;
