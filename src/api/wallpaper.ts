import { WallpaperResponse } from "@/@types/wallpaper-response";
import { Category, Color, isCategory, isColor } from "@/lib/menu-item-link";
import axiosInstance from "@/services/axios/axios-instance";

class WallpaperApi {
	static async getWallpaper(query: string = "", page: string) {
		const response = await axiosInstance.get("api", {
			params: {
				q: query,
				page,
			},
		});
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		return response.data as WallpaperResponse;
	}
	static async getWallpaperById(id: string) {
		const response = await axiosInstance.get("api", {
			params: {
				id,
			},
		});
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		return (response.data as WallpaperResponse).hits[0];
	}
	static async getWallpaperByCategory(
		query: string = "",
		category: Category,
		page: string
	) {
		if (!isCategory(category)) {
			throw new Error(`There is't "${category}" category on website`);
		}
		const response = await axiosInstance.get("api", {
			params: {
				category,
				q: query,
				page,
			},
		});
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		return response.data as WallpaperResponse;
	}
	static async getWallpaperByColor(
		query: string = "",
		color: Color,
		page: string
	) {
		if (!isColor(color)) {
			throw new Error(`There is't "${color}" color on website`);
		}
		const response = await axiosInstance.get("api", {
			params: {
				colors: color,
				q: query,
				page,
			},
		});
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		return response.data as WallpaperResponse;
	}
}

export default WallpaperApi;
