import WallpaperApi from "@/api/wallpaper";
import WallpaperListSkeleton from "@/components/skeletons/wallpaper-list-skeleton";
import WallpaperPaginationList from "@/components/wallpaper-pagination-list";
import WallpaperSearchForm from "@/components/wallpaper-search-form";
import usePagination from "@/hooks/use-pagination";
import useSearchWallpaper from "@/hooks/use-search-wallpaper";
import { Color } from "@/lib/menu-item-link";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ColorPage = () => {
	const currentPage = usePagination();
	const { name } = useParams<{ name: string }>();
	const query = useSearchWallpaper();
	const { data, isPending } = useQuery({
		queryKey: ["wallpaper", query, "color", name, currentPage],
		queryFn: WallpaperApi.getWallpaperByColor.bind(
			null,
			query,
			name as Color,
			currentPage.toString()
		),
	});
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					{name} Color Wallpapers
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
export default ColorPage;
