import { Skeleton } from "../ui/skeleton";
import WallpaperDetailsInfoSkeleton from "./wallpaper-details-info-skeleton";

const WallpaperDetailsSkeleton = () => {
	return (
		<section className="py-7 gap-7 grid grid-cols-1 xl:grid-cols-12">
			<div className="xl:col-span-8">
				<Skeleton className="h-76" />
			</div>
			<WallpaperDetailsInfoSkeleton />
		</section>
	);
};
export default WallpaperDetailsSkeleton;
