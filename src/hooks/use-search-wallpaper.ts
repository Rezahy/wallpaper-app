import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const useSearchWallpaper = () => {
	const [searchParams] = useSearchParams();
	const [query, setQuery] = useState(() => {
		if (searchParams.has("q")) {
			const searchQueryParams = searchParams.get("q")!;
			return searchQueryParams;
		}
		return "";
	});

	const { search } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [search]);

	useEffect(() => {
		if (searchParams.has("q")) {
			const searchQueryParams = searchParams.get("q")!;
			setQuery(searchQueryParams);
		} else {
			setQuery("");
		}
	}, [search, searchParams]);
	return query;
};
export default useSearchWallpaper;
