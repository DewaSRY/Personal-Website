"use client";
import { ComponentProps, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LoaderText from "./svg/loader-text";
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
          initial={{ height: "100vh", opacity: 1 }}
          animate={{ height: 0, opacity: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className={cn(
            "w-screen h-screen bg-gradient-to-l from-foreground to-gray-950  fixed z-20 bottom-0 origin-bottom",
            "flex items-center justify-center text-xl md:text-2xl text-gray-900 font-black"
          )}
        >
          <LoaderText>
            {currentPhatName.length > 0 ? currentPhatName : "Home"}
          </LoaderText>
        </motion.div>

        {/* Second Layer */}
        <motion.div
          animate={{ height: "0vh", opacity: 0 }}
          exit={{ height: "100vh", opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeInOut",
          }}
          className={cn("w-screen h-screen bg-gray-900 fixed  ")}
        />

        {children}
      </AnimatePresence>
    </div>
  );
}
