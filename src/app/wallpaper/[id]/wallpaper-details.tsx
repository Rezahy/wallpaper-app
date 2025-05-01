import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import LikeButton from "./like-button";
import SaveButton from "./save-button";
import ShareButton from "./share-button";
import DownloadButton from "./download-button";
import { motion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Hit } from "@/@types/wallpaper-response";
import useWallpaper from "@/stores/wallpaper";

type WallpaperDetailsProps = {
	data: Hit;
};
const WallpaperDetails = ({ data }: WallpaperDetailsProps) => {
	const isSaved = useWallpaper((state) => state.isSaved);
	useWallpaper((state) => state.savedWallpapers);
	return (
		<section className="py-7 gap-7 grid grid-cols-1 xl:grid-cols-12">
			<motion.div
				initial={{ opacity: 0, y: -200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					delay: 0.25,
					type: "spring",
				}}
				className="xl:col-span-8 justify-self-center"
			>
				{/* <img
      src={data.webformatURL}
      width={data.webformatWidth}
      height={data.webformatHeight}
      alt="wallpaper"
      className="rounded-xl shadow mx-auto"
    /> */}
				<LazyLoadImage
					src={data.webformatURL}
					width={data.webformatWidth}
					height={data.webformatHeight}
					effect="blur"
					alt="wallpaper"
					className="rounded-xl shadow mx-auto"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 1,
					delay: 0.8,
				}}
				className="xl:col-span-4"
			>
				<Card>
					<CardHeader className="flex space-x-3 items-center">
						<Avatar>
							<AvatarImage
								src={data.userImageURL}
								className="rounded-full size-10"
							/>
						</Avatar>
						<Link
							to={`https://pixabay.com/users/${data.user}-${data.user_id}/`}
							className="text-sm font-semibold"
							target="_blank"
						>
							{data.user}
						</Link>
					</CardHeader>
					<Separator />
					<CardContent className="space-y-1">
						<div className="flex justify-between">
							<span className="text-muted-foreground">Views</span>
							<span>{data.views}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Downloads</span>
							<span>{data.downloads}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Saves</span>
							<span>
								{isSaved(data) ? data.collections + 1 : data.collections}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Media type</span>
							<span>{data.type}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Resolution</span>
							<span>
								{data.imageWidth} x {data.imageHeight}
							</span>
						</div>
					</CardContent>
					<Separator />
					<CardFooter className="flex space-x-3">
						<LikeButton likes={data.likes} wallpaper={data} />
						<SaveButton wallpaper={data} />
						<ShareButton title={data.pageURL} text={data.tags} />
						<DownloadButton url={data.largeImageURL} id={data.id} />
					</CardFooter>
				</Card>
			</motion.div>
		</section>
	);
};
export default WallpaperDetails;
