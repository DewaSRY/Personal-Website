import { ComponentProps, PropsWithChildren } from "react";

import ModeButton from "@/components/common/mode-button";
import SelectLanguage from "./select-language";
interface SettingsNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SettingsNav({
  children,
  ...resProps
}: SettingsNavProps) {
  return (
    <div className="fixed right-10 top-5 flex  w-[90px] justify-between  items-center">
      <SelectLanguage />
      <ModeButton />
    </div>
  );
}
