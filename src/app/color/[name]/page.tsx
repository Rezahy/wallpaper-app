import WallpaperApi from "@/api/wallpaper";
import WallpaperListSkeleton from "@/components/skeletons/wallpaper-list-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WallpaperPaginationList from "@/components/wallpaper-pagination-list";
import usePagination from "@/hooks/use-pagination";
import { Color } from "@/lib/menu-item-link";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ColorPage = () => {
	const currentPage = usePagination();
	const { name } = useParams<{ name: string }>();
	const { data, isPending } = useQuery({
		queryKey: ["wallpaper", "color", name, currentPage],
		queryFn: WallpaperApi.getWallpaperByColor.bind(
			null,
			"",
			name as Color,
			currentPage.toString()
		),
	});
	const searchRef = useRef<HTMLInputElement | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (searchRef.current && searchRef.current.value.trim().length > 0) {
			const value = searchRef.current.value;
			setSearchParams((params) => {
				params.set("q", value);
				return params;
			});
			// const n = new URLSearchParams();
			// n.append("q", value);
			// let params = serializeFormQuery(e.target);
			// setSearchParams(n);
		}
	};
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					{name} Color Wallpapers
				</h1>
			</header>
			<div className="max-w-xl mx-auto relative">
				<form onSubmit={onSubmitHandler}>
					<Input
						placeholder="Search wallpapers ..."
						className="pr-9"
						name="search"
						defaultValue={searchParams.get("q") ?? ""}
						ref={searchRef}
					/>
					<Button
						variant="ghost"
						size="sm"
						className="absolute right-0.5 text-gray-500 top-[50%] -translate-y-[50%]"
					>
						<Search absoluteStrokeWidth size={16} />
					</Button>
				</form>
			</div>
			{isPending && <WallpaperListSkeleton />}
			{data && (
				<WallpaperPaginationList currentPage={currentPage} data={data} />
			)}
		</section>
	);
};
export default ColorPage;
