import { ChevronRight, LayoutGrid, Palette, Wallpaper } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { categories, colors, menuItemLinks } from "@/lib/menu-item-link";
import { Link, useLocation } from "react-router-dom";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";

const AppSidebar = () => {
	const { pathname } = useLocation();
	const { isMobile, setOpenMobile } = useSidebar();
	const sidebarMenuButtonClickHandler = () => {
		if (isMobile) {
			setOpenMobile(false);
		}
	};
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="mt-2">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							tooltip="Wallpaper"
							asChild
							size="lg"
							isActive={pathname === "/"}
							onClick={sidebarMenuButtonClickHandler}
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Link to="/">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#B8336A] text-sidebar-primary-foreground">
									<Wallpaper className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										<span>Wallpaper App</span>
										<span className="sr-only">Wallpaper</span>
									</span>
									<span className="truncate text-xs mt-1">
										Find the best one
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItemLinks.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										tooltip={item.title}
										asChild
										isActive={pathname === item.url}
										onClick={sidebarMenuButtonClickHandler}
									>
										<Link to={item.url}>
											<item.icon className="fill-primary" absoluteStrokeWidth />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Filter Wallpaper</SidebarGroupLabel>
					<SidebarMenu>
						<Collapsible asChild className="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip="Categories">
										<LayoutGrid />
										<span>Category</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{categories.map((category) => (
											<SidebarMenuSubItem>
												<SidebarMenuSubButton asChild>
													<Link to={`category/${category}`}>
														<span>{category}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					</SidebarMenu>
					<SidebarMenu>
						<Collapsible asChild className="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip="Categories">
										<Palette />
										<span>Color</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{colors.map((color) => (
											<SidebarMenuSubItem>
												<SidebarMenuSubButton asChild>
													<Link to={`color/${color}`}>
														<span>{color}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default AppSidebar;
