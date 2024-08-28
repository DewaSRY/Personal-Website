import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import Image from "next/image";
import dynamic from "next/dynamic";
import HomeImage from "@/containers/home-image";
import HomeText from "@/containers/home-text";
import { Button } from "@/components/ui/button";
export default function HomeRoute() {
  return (
    <div id="home" className="h-[100vh] grid grid-cols-12 ">
      <HomeImage
        className={cn(
          " col-start-1 col-span-2 ",
          "xl:col-start-1 xl:col-span-4 ",
          "row-start-1 row-span-1"
        )}
      />
      <HomeText
        className={cn(
          "col-start-3 col-span-9 xl:col-start-5 xl:col-span-5 ",
          "row-start-1 row-span-1",
          "md:pt-20 xl:pt-12 "
        )}
      />
    </div>
  );
}
