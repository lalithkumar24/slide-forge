import { getRecentProject } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/globals/app-sidebar";
import InfoBar from "@/components/globals/info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const recentProjects = await getRecentProject();
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("sign-in");
  }
  return (
    <SidebarProvider>
      <AppSidebar
        user={checkUser.user}
        recentProjects={recentProjects.data || []}
      ></AppSidebar>
      <SidebarInset>
        <InfoBar user={checkUser.user} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
