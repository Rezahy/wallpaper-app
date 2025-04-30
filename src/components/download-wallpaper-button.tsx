import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadWallpaperButton = () => {
	return (
		<Button
			className="xl:scale-0 xl:opacity-0 cursor-pointer absolute  bottom-2 xl:-bottom-20 right-2 dark:bg-black/50  dark:hover:bg-black/75 group-hover:scale-100 group-hover:opacity-100 duration-500 group-hover:bottom-2 delay-100"
			variant="outline"
			size="icon"
		>
			<Download />
		</Button>
	);
};
export default DownloadWallpaperButton;
