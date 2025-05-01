import { FormEvent, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const WallpaperSearchForm = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchRef = useRef<HTMLInputElement | null>(null);
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (searchRef.current && searchRef.current.value.trim().length > 0) {
			const value = searchRef.current.value;
			setSearchParams((params) => {
				params.set("q", value);
				params.delete("page");
				return params;
			});
		}
	};
	return (
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
	);
};
export default WallpaperSearchForm;
