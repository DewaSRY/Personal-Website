import { ComponentProps, PropsWithChildren } from "react";

import ModeButton from "@/components/common/mode-button";
import SelectLanguage from "./select-language";
import useMode from "@/hooks/use-mode";
interface SettingsNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SettingsNav({
  children,
  ...resProps
}: SettingsNavProps) {
  return (
    <div className="fixed  z-50 right-5 top-5 flex   justify-between  items-center">
      {/* <SelectLanguage /> */}
      <ModeButton />
    </div>
  );
}
