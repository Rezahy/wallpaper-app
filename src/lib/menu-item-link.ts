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
