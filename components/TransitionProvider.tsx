"use client";

import { ComponentProps, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface TransitionProviderProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function TransitionProvider({
  children,
  ...resProps
}: TransitionProviderProps) {
  const currentPhatName = usePathname().replace("/", "").toUpperCase();
  return (
    <div className="no-scrollbar" key={currentPhatName}>
      <AnimatePresence mode="wait">
        {/* First Layer  */}
        <motion.div
          animate={{ height: "0vh", opacity: 0 }}
          exit={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={cn("w-screen h-screen bg-gray-900 fixed z-20")}
        />

        {/* Second Layer */}
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className={cn(
            "w-screen h-screen bg-gradient-to-l from-gray-100 to-gray-400  fixed z-20 bottom-0 origin-bottom",
            "flex items-center justify-center text-xl md:text-2xl text-gray-900 font-black"
          )}
        >
          <motion.div
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2>{currentPhatName.length > 0 ? currentPhatName : "Home"}</h2>
          </motion.div>
        </motion.div>

        {children}
      </AnimatePresence>
    </div>
  );
}
