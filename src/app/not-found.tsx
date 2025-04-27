import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="px-7 py-7 sm:px-10 pb-10">
			<h1>404 not found page</h1>
			<Button asChild>
				<Link to="/" replace>
					Back to home page
				</Link>
			</Button>
		</div>
	);
}
