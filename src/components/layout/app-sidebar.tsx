import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  CirclePlus,
  Gamepad2,
  LayoutDashboard,
  Package,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export function AppSidebar() {
  const { pathname } = useLocation();
  const { state: sidebarState } = useSidebar();

  const items = [
    {
      title: "Library",
      url: "library",
      icon: <LayoutDashboard />,
    },
    {
      title: "Wishlist",
      url: "wishlist",
      icon: <ShoppingCart />,
    },
    {
      title: "Backlog",
      url: "backlog",
      icon: <Package />,
    },
    {
      title: "Games",
      url: "games",
      icon: <Gamepad2 />,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold">
            Checkpoint
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`py-6 font-bold hover:text-primary ${pathname == "/" + item.url && "text-primary"}`}
                  >
                    <a href={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {sidebarState === "collapsed" ? (
          <Button variant="ghost">
            <CirclePlus />
          </Button>
        ) : (
          <Button>
            <CirclePlus />
            Add Game
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
