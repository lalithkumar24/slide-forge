"use client";
import { itemVariants, themes, timeAgo } from "@/lib/constants";
import { useSlideStore } from "@/store/useSlideStore";
import { JsonValue } from "@prisma/client/runtime/library";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ThumnailPreview from "./thumnail-preview";
import { is, th } from "date-fns/locale";
import AlertDialogBox from "../alert-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteProject, recoverProject } from "@/actions/project";

type Props = {
  projectId: string;
  title: string;
  createdAt: string;
  themeName: string;
  isDeleted?: boolean;
  slideData: JsonValue;
};

const ProjectCard = ({
  projectId,
  title,
  createdAt,
  themeName,
  isDeleted,
  slideData,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { setSlides } = useSlideStore();
  const router = useRouter();

  const handleNavigation = () => {
    setSlides(JSON.parse(JSON.stringify(slideData)));
    router.push(`/presentation/${projectId}`);
  };
  const theme = themes.find((theme) => theme.name === themeName) || themes[0];
  const handleRecovery = async () => {
    setLoading(true);
    if (!projectId) {
      setLoading(false);
      toast.error("Error:", {
        description: "Project Not found",
      });
      return;
    }
    try {
      const res = await recoverProject(projectId);
      if (res.status !== 200) {
        toast.error("Error:", {
          description:
            res.error || "Something went wrong while recovering the project",
        });
        return;
      }
      setOpen(false);
      router.refresh();
      toast.success("Success:", {
        description: "Project recovered successfully",
      });
      setLoading(false);
    } catch (error) {
      toast.error("Error:", {
        description: "Something went wrong while recovering the project",
      });
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    setLoading(true);
    if (!projectId) {
      setLoading(false);
      toast.error("Error:", {
        description: "Project Not found",
      });
      return;
    }
    try {
      const res = await deleteProject(projectId);
      if (res.status !== 200) {
        toast.error("Error:", {
          description:
            res.error || "Failed to delete the project, please try again",
        });
        return;
      }
      setOpen(false);
      router.refresh();
      toast.success("Success:", {
        description: "Project successfully deleted",
      });
      setLoading(false);
    } catch (error) {
      toast.error("Error:", {
        description: "Failed to delete the project",
      });
      setLoading(false);
    }
  };
  return (
    <motion.div
      variants={itemVariants}
      className={`group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors ${
        !isDeleted && "hover:bg-muted/50"
      }`}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer"
        onClick={handleNavigation}
      >
        {/* <ThumnailPreview
          theme={theme}
          //TODO: ADD slide data
          // slide={JSON.parse(JSON.stringify(slideData))?.[0]}
        /> */}
      </div>
      <div className="w-full">
        <div className="space-y-l">
          <h3 className="font w-full justify-between items-center gap-2">
            {title}This is the Title till i create Project
          </h3>
          <div className="flex w-full justify-center items-center gap-2">
            <p
              className=" text-sm text-muted-foreground"
              suppressHydrationWarning
            >
              {timeAgo(createdAt)}
            </p>
            {isDeleted ? (
              <AlertDialogBox
                description="This will recover the project and restore your data"
                className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700"
                open={open}
                handleOpen={() => setOpen(!open)}
                loading={loading}
                onClick={handleRecovery}
              >
                <Button
                  size={"sm"}
                  variant="ghost"
                  className="bg-background-80 dark:hover:bg-background-90"
                  disabled={loading}
                >
                  Recover
                </Button>
              </AlertDialogBox>
            ) : (
              <AlertDialogBox
                description="This will delete the project and send to trash"
                className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700"
                open={open}
                handleOpen={() => setOpen(!open)}
                loading={loading}
                onClick={handleDelete}
              >
                <Button
                  size={"sm"}
                  variant="ghost"
                  className="bg-background-80 dark:hover:bg-background-90"
                  disabled={loading}
                >
                  Delete
                </Button>
              </AlertDialogBox>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
