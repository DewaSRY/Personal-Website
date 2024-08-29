"use client";
import style from "./loader-text.module.css";
import { ComponentProps, PropsWithChildren } from "react";
import { motion } from "framer-motion";
interface LoaderTextProps extends ComponentProps<"div">, PropsWithChildren {}

export default function LoaderText({ children, ...resProps }: LoaderTextProps) {
  return (
    <motion.svg className={style.svg}>
      <text
        x="50%"
        y="50%"
        dy=".32rem"
        textAnchor="middle"
        className={style.textBody}
      >
        {children}
      </text>
    </motion.svg>
  );
}
