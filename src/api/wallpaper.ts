import { WallpaperResponse } from "@/@types/wallpaper-response";
import { Category, isCategory } from "@/lib/menu-item-link";
import axiosInstance from "@/services/axios/axios-instance";

class WallpaperApi {
	static async getWallpaper() {
		const response = await axiosInstance.get("api");
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
	static async getWallpaperByCategory(query: string = "", category: Category) {
		if (!isCategory(category)) {
			throw new Error(`There is't ${category} category on website`);
		}
		const response = await axiosInstance.get("api", {
			params: {
				category,
				q: query,
			},
		});
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		console.log(response);
		return response.data as WallpaperResponse;
	}
}

export default WallpaperApi;
