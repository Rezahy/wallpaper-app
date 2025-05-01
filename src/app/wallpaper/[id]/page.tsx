import WallpaperApi from "@/api/wallpaper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import WallpaperDetailsSkeleton from "@/components/skeletons/wallpaper-details-skeleton";
import WallpaperDetails from "./wallpaper-details";

const WallpaperDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isPending } = useQuery({
		queryKey: ["wallpaper", id],
		enabled: !!id,
		queryFn: WallpaperApi.getWallpaperById.bind(null, id!),
	});

	if (isPending) {
		return <WallpaperDetailsSkeleton />;
	}
	if (data) {
		return <WallpaperDetails data={data} />;
	}
};
export default WallpaperDetailsPage;
