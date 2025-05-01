import { MenuItemLink } from "@/@types/menu-item-link";
import { Bookmark, Heart } from "lucide-react";

export const menuItemLinks: MenuItemLink[] = [
	{
		title: "Favorites",
		url: "/favorite",
		icon: Heart,
	},
	{
		title: "Saved",
		url: "/saved",
		icon: Bookmark,
	},
];

export const categories = [
	"backgrounds",
	"fashion",
	"nature",
	"science",
	"education",
	"feelings",
	"health",
	"people",
	"religion",
	"places",
	"animals",
	"industry",
	"computer",
	"food",
	"sports",
	"transportation",
	"travel",
	"buildings",
	"business",
	"music",
] as const;

export type Category = (typeof categories)[number];

export const isCategory = (name: unknown): name is Category => {
	if (typeof name === "string") {
		return categories.includes(name as Category);
	}
	return false;
};

export const colors = [
	"grayscale",
	"transparent",
	"red",
	"orange",
	"yellow",
	"green",
	"turquoise",
	"blue",
	"lilac",
	"pink",
	"white",
	"gray",
	"black",
	"brown",
] as const;

export type Color = (typeof colors)[number];

export const isColor = (color: unknown): color is Color => {
	if (typeof name === "string") {
		return colors.includes(color as Color);
	}
	return false;
};
