import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const parseNumber = (str: string) => {
	if (str.match(/^-?\d+$/)) {
		//valid integer (positive or negative)
		const num = parseInt(str, 10);
		return num;
	} else if (str.match(/^-?\d*\.\d+$/)) {
		//valid float
		const num = parseFloat(str);
		return num;
	} else {
		//not valid number
		return null;
	}
};

const createSearchParams = (
	init: URLSearchParams,
	newValue?: { [k: string]: string }
) => {
	return new URLSearchParams({
		...Object.fromEntries(init.entries()),
		...newValue,
	});
};

export const createSearchParamsString = (
	init: URLSearchParams,
	newValue?: { [k: string]: string }
) => {
	return `?${createSearchParams(init, newValue)}`;
};
