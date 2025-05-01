import WallpaperApi from "@/api/wallpaper";
import { useQuery } from "@tanstack/react-query";
import WallpaperListSkeleton from "@/components/skeletons/wallpaper-list-skeleton";
import usePagination from "@/hooks/use-pagination";
import WallpaperPaginationList from "@/components/wallpaper-pagination-list";
import useSearchWallpaper from "@/hooks/use-search-wallpaper";
import WallpaperSearchForm from "@/components/wallpaper-search-form";

const HomePage = () => {
	const currentPage = usePagination();
	const query = useSearchWallpaper();
	const { data, isPending } = useQuery({
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
		</section>
	);
};
export default HomePage;
