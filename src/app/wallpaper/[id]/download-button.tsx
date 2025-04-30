import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download, Loader } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
type DownloadButtonProps = {
	url: string;
	id: number;
};
const DownloadButton = ({ url, id }: DownloadButtonProps) => {
	const downloadImage = () => {
		startTransition(async () => {
			const response = await fetch(url);
			const imageBlob = await response.blob();
			saveAs(imageBlob, `wallpaper-app-${id}`);
			toast.success("wallpaper downloaded successfully");
		});
	};
	const [isPending, startTransition] = useTransition();
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={downloadImage}
			disabled={isPending}
		>
			{isPending ? <Loader className="animate-spin" /> : <Download />}
		</Button>
	);
};
export default DownloadButton;
