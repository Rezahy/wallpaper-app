import WallpaperApi from "@/api/wallpaper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import LikeButton from "./like-button";
import SaveButton from "./save-button";
import ShareButton from "./share-button";
import DownloadButton from "./download-button";
import useWallpaper from "@/stores/wallpaper";

const WallpaperDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data } = useQuery({
		queryKey: ["wallpaper", id],
		enabled: !!id,
		queryFn: WallpaperApi.getWallpaperById.bind(null, id!),
	});
	const isSaved = useWallpaper((state) => state.isSaved);
	useWallpaper((state) => state.savedWallpapers);
	if (data) {
		return (
			<section className="py-7 gap-7 grid grid-cols-1 xl:grid-cols-12">
				<div className="xl:col-span-8">
					<img
						src={data.webformatURL}
						width={data.webformatWidth}
						height={data.webformatHeight}
						alt="wallpaper"
						className="rounded-xl shadow mx-auto"
					/>
				</div>
				<div className="xl:col-span-4">
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
				</div>
			</section>
		);
	}
};
export default WallpaperDetails;
