import { z } from "zod";
const envSchema = z.object({
	VITE_API_KEY: z.string(),
	VITE_BASE_URL: z.string(),
	VITE_PER_PAGE: z.coerce.number(),
});

export const env = envSchema.parse(import.meta.env);
