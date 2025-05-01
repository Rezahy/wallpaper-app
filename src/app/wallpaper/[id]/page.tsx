import WallpaperApi from "@/api/wallpaper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import WallpaperDetailsSkeleton from "@/components/skeletons/wallpaper-details-skeleton";
import WallpaperDetails from "./wallpaper-details";
import { motion } from "motion/react";

const WallpaperDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isPending, error } = useQuery({
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
	if (error) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="pt-7"
			>
				<h3 className="text-2xl font-semibold py-7 text-center">
					{error.message}
				</h3>
			</motion.div>
		);
	}
};
export default WallpaperDetailsPage;
