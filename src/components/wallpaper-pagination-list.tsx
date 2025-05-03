import { WallpaperResponse } from "@/@types/wallpaper-response";
import WallpaperList from "./wallpaper-list";
import WallpaperPagination from "./wallpaper-pagination";
type WallpaperPaginationListProps = {
	data: WallpaperResponse;
	currentPage: number;
};
const WallpaperPaginationList = ({
	data,
	currentPage,
}: WallpaperPaginationListProps) => {
	return (
		<>
			<WallpaperList data={data.hits} />
			{data.hits.length > 0 && (
				<WallpaperPagination
					currentPage={currentPage}
					totalHits={data.totalHits}
				/>
			)}
		</>
	);
};
export default WallpaperPaginationList;
