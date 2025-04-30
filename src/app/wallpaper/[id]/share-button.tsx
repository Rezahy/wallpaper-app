import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useLocation } from "react-router-dom";
type ShareButtonProps = {
	title: string;
	text: string;
};
const ShareButton = ({ title, text }: ShareButtonProps) => {
	const { pathname } = useLocation();
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() =>
				window.navigator.share({
					url: pathname,
					title,
					text,
				})
			}
		>
			<Share2 />
		</Button>
	);
};
export default ShareButton;
