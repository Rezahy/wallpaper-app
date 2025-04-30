import { Skeleton } from "../ui/skeleton";

const WallpaperListSkeleton = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  py-7 pb-10">
			{Array.from({ length: 20 }).map((_, index) => (
				<Skeleton className="rounded-xl shadow-sm h-[350px]" key={index} />
			))}
		</section>
	);
};
export default WallpaperListSkeleton;
