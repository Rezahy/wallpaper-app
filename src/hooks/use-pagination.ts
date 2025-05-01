import { parseNumber } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const usePagination = () => {
	const [searchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState(() => {
		if (searchParams.has("page")) {
			const pageParams = searchParams.get("page")!;
			const parsedPageNumber = parseNumber(pageParams);
			if (
				parsedPageNumber &&
				Number.isInteger(parsedPageNumber) &&
				parsedPageNumber > 0
			) {
				return parsedPageNumber;
			}
		}
		return 1;
	});
	const { search } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [search]);
	useEffect(() => {
		if (searchParams.has("page")) {
			const pageParams = searchParams.get("page")!;
			const parsedPageNumber = parseNumber(pageParams);
			if (
				parsedPageNumber &&
				Number.isInteger(parsedPageNumber) &&
				parsedPageNumber > 0
			) {
				setCurrentPage(parsedPageNumber);
			}
		} else {
			setCurrentPage(1);
		}
	}, [search, searchParams]);
	return currentPage;
};
export default usePagination;
