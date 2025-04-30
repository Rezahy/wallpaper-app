import { WallpaperResponse } from "@/@types/wallpaper-response";
import axiosInstance from "@/services/axios/axios-instance";

class WallpaperApi {
	static async getWallpaper() {
		const response = await axiosInstance.get("api");
		if (response.status !== 200) {
			throw new Error("something went wrong");
		}
		return response.data as WallpaperResponse;
	}
}

export default WallpaperApi;
