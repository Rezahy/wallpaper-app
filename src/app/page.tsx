import WallpaperApi from "@/api/wallpaper";
import { useQuery } from "@tanstack/react-query";
import WallpaperListSkeleton from "@/components/skeletons/wallpaper-list-skeleton";
import usePagination from "@/hooks/use-pagination";
import WallpaperPaginationList from "@/components/wallpaper-pagination-list";
import useSearchWallpaper from "@/hooks/use-search-wallpaper";
import WallpaperSearchForm from "@/components/wallpaper-search-form";
import { motion } from "motion/react";

const HomePage = () => {
	const currentPage = usePagination();
	const query = useSearchWallpaper();
	const { data, isPending, error } = useQuery({
		queryKey: ["wallpaper", query, currentPage],
		queryFn: WallpaperApi.getWallpaper.bind(
			null,
			query,
			currentPage.toString()
		),
	});

	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					Wallpaper App
				</h1>
			</header>
			<WallpaperSearchForm />
			{isPending && <WallpaperListSkeleton />}
			{data && (
				<WallpaperPaginationList currentPage={currentPage} data={data} />
			)}
			{error && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="text-2xl font-semibold py-7 text-center">
						{error.message}
					</h3>
				</motion.div>
			)}
		</section>
	);
};
export default HomePage;
