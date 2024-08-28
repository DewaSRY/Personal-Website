import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import Image from "next/image";
import dynamic from "next/dynamic";
import HomeImage from "@/containers/home-image";
export default function HomeRoute() {
  const MoonElement = dynamic(() => import("@/components/moon"));
  return (
    <div id="home" className="h-[100vh] ">
      <HomeImage className="lg:w-1/2 xl:w-1/3 h-[100vh]" />
    </div>
  );
}
