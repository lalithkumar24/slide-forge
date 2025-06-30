"use client";
import usePropmtStore from "@/store/usePropmptStore";
import { set } from "date-fns";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ReanderPage = (props: Props) => {
  const router = useRouter();
  const { page, setPage } = usePropmtStore();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full flex items-center justify-center"
      ></motion.div>
    </AnimatePresence>
  );
};

export default ReanderPage;
