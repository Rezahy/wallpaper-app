import { env } from "@/lib/env";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: env.VITE_BASE_URL,
	params: { key: env.VITE_API_KEY, per_page: env.VITE_PER_PAGE },
});

export default axiosInstance;
