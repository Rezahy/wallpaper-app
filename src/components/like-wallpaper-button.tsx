import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const LikeWallpaperButton = () => {
	return (
		<Button
			// className="xl:scale-0 xl:opacity-0 cursor-pointer absolute top-2 right-2  dark:bg-black/50  dark:hover:bg-black/75 group-hover:scale-100 group-hover:opacity-100 duration-300"
			className="bg-black/20 dark:bg-black/20 cursor-pointer hover:bg-black/40 dark:hover:bg-black/40"
			variant="outline"
			size="icon"
		>
			<Heart className="fill-white text-white" />
		</Button>
	);
};
export default LikeWallpaperButton;
