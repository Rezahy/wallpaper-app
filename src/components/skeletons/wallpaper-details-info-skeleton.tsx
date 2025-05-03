import { Separator } from "@radix-ui/react-dropdown-menu";
import { Skeleton } from "../ui/skeleton";

const WallpaperDetailsInfoSkeleton = () => {
	return (
		<div className="xl:col-span-4">
			<div className="bg-card flex flex-col gap-6 rounded-xl border py-6 shadow-sm px-6">
				<div className="flex space-x-3 items-center">
					<div>
						<Skeleton className="rounded-full size-8" />
					</div>
					<Skeleton className="w-[20%] h-2" />
				</div>
				<Separator />
				<div className="space-y-3">
					<div className="flex justify-between">
						<Skeleton className="h-2 w-[20%]" />
						<Skeleton className="h-2 w-[20%]" />
					</div>
					<div className="flex justify-between">
						<Skeleton className="h-2 w-[20%]" />
						<Skeleton className="h-2 w-[20%]" />
					</div>
					<div className="flex justify-between">
						<Skeleton className="h-2 w-[20%]" />
						<Skeleton className="h-2 w-[20%]" />
					</div>
					<div className="flex justify-between">
						<Skeleton className="h-2 w-[20%]" />
						<Skeleton className="h-2 w-[20%]" />
					</div>
					<div className="flex justify-between">
						<Skeleton className="h-2 w-[20%]" />
						<Skeleton className="h-2 w-[20%]" />
					</div>
				</div>
				<Separator />
				<div className="flex space-x-3">
					<Skeleton className="h-8.5 flex-1" />
					<Skeleton className="h-8.5 flex-1" />
					<Skeleton className="size-8.5 " />
					<Skeleton className="size-8.5 " />
				</div>
			</div>
		</div>
	);
};
export default WallpaperDetailsInfoSkeleton;
