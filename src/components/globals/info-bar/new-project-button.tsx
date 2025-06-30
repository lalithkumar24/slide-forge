"use client";

import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const NewProjectButton = ({ user }: { user: User }) => {
  const router = useRouter();

  return (
    <Button
      className="rounded-lg font-semibold cursor-pointer"
      disabled={!user.subscription}
      // onClick={() => }
    >
      <Plus />
      New Project
    </Button>
  );
};
export default NewProjectButton;
