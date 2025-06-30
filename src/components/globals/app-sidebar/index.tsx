"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Project, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import NavMain from "./nav-main";
import { data } from "@/lib/constants";
import RecentOpen from "./recent-open";
import NavFooter from "./nav-footer";

type Props = {
  recentProjects: Project[];
  user: User;
};

const AppSidebar = ({
  recentProjects,
  user,
  ...props
}: { recentProjects: Project[] } & { user: User } & React.Component<
    typeof Sidebar
  >) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-[212px] bg-background-80"
      {...props}
    >
      <SidebarHeader className="pt-6 px-2 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-forground"
        >
          <div className="flex items-center justify-center">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground ">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage
                  src={"/slide-forge.svg"}
                  alt={"slide-forge logo"}
                />
                <AvatarFallback className="rounded-lg">SF</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <span className="truncate text-primary text-2xl font-semibold">
                Silde-Forge
              </span>
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-10 gap-y-6">
        <NavMain items={data.navMain} />
        <RecentOpen recentProjects={recentProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter prismaUser={user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
