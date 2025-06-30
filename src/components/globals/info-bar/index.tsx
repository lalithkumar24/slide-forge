import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import SearchBar from "./info-searchbar";
import ThemeSwitcher from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import NewProjectButton from "./new-project-button";

type Props = {
  user: User;
  children: React.ReactNode;
};

const InfoBar = ({ user }: Props) => {
  return (
    <header className="sticky top-0 z-[10] flex shrink-0 flex-warp items-center gap-2 bg-background p-4 justify-between">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="w-full max-w-[95%] flex items-center justify-between gap-4flex-warp">
        <SearchBar />
        <ThemeSwitcher />
        <div className="flex flex-warp gap-4 items-center justify-end">
          <Button className="bg-primary rounded-lg hover:bg-background-80 text-white font-semibold cursor-not-allowd cursor-pointer">
            <Upload />
            Import
          </Button>
          <NewProjectButton user={user} />
        </div>
      </div>
    </header>
  );
};

export default InfoBar;
