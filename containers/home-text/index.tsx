"use client";
// import { useRef, ComponentRef } from "react";
import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren, useState } from "react";
// import Heading from "@/components/common/heading";
// import Paragraph from "@/components/common/paragraph";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import style from "./masked.module.css";
import { createPortal } from "react-dom";
import Text from "./text";
import Buttons from "./buttons";

import useMousePosition from "@/hooks/use-mouse-position";

interface HomeTextProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HomeText({
  children,
  className,
  ...resProps
}: HomeTextProps) {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  return (
    <>
      <div
        onMouseEnter={setIsHovered.bind(null, true)}
        onMouseLeave={setIsHovered.bind(null, false)}
        className={cn(className, "")}
      >
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            opacity: isHovered ? 1 : 0,
          }}
          className={cn(style.mask, "z-0")}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />

        <Text
          className="w-full  "
          onMouseEnter={setIsHovered.bind(null, true)}
          onMouseLeave={setIsHovered.bind(null, false)}
        />
        {/* <div>
          <Buttons className="sticky top-0 z-[2]" />
        </div> */}
      </div>
    </>
  );
}
