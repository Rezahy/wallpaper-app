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
