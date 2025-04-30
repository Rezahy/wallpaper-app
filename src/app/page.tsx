import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import WallpaperApi from "@/api/wallpaper";
import { useQuery } from "@tanstack/react-query";
import WallpaperListSkeleton from "@/components/skeletons/wallpaper-list-skeleton";
import WallpaperList from "@/components/wallpaper-list";

const HomePage = () => {
	const { data, isPending } = useQuery({
		queryKey: ["wallpaper"],
		queryFn: WallpaperApi.getWallpaper,
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
					Wallpaper App
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
			{data && <WallpaperList data={data.hits} />}
		</section>
	);
};
export default HomePage;
