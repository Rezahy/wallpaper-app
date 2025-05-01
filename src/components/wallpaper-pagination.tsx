import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { env } from "@/lib/env";
import { createSearchParamsString } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
type WallpaperPaginationProps = {
	currentPage: number;
	totalHits: number;
};
const WallpaperPagination = ({
	currentPage,
	totalHits,
}: WallpaperPaginationProps) => {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItems currentPage={currentPage} totalHits={totalHits} />
			</PaginationContent>
		</Pagination>
	);
};
export default WallpaperPagination;

type PaginationItemsProps = {
	currentPage: number;
	totalHits: number;
};
const PaginationItems = ({ currentPage, totalHits }: PaginationItemsProps) => {
	const totalPage = Math.ceil(totalHits / env.VITE_PER_PAGE);
	const [searchParams] = useSearchParams();
	return (
		<>
			{currentPage > 1 && (
				<PaginationItem>
					<PaginationPrevious
						to={{
							search: createSearchParamsString(searchParams, {
								page: (currentPage - 1).toString(),
							}),
						}}
					/>
				</PaginationItem>
			)}
			{currentPage >= 2 && (
				<PaginationItem>
					<PaginationLink
						to={{
							search: createSearchParamsString(searchParams, {
								page: (currentPage - 1).toString(),
							}),
						}}
					>
						{currentPage - 1}
					</PaginationLink>
				</PaginationItem>
			)}
			<PaginationItem>
				<PaginationLink
					to={{
						search: createSearchParamsString(searchParams, {
							page: currentPage.toString(),
						}),
					}}
					isActive
				>
					{currentPage}
				</PaginationLink>
			</PaginationItem>
			{currentPage != totalPage && (
				<PaginationItem>
					<PaginationLink
						to={{
							search: createSearchParamsString(searchParams, {
								page: (currentPage + 1).toString(),
							}),
						}}
					>
						{currentPage + 1}
					</PaginationLink>
				</PaginationItem>
			)}
			{currentPage != totalPage && (
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
			)}
			{currentPage !== totalPage && (
				<PaginationItem>
					<PaginationNext
						to={{
							search: createSearchParamsString(searchParams, {
								page: (currentPage + 1).toString(),
							}),
						}}
					/>
				</PaginationItem>
			)}
		</>
	);
};
