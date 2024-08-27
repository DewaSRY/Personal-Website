import Paragraph from "@/components/common/paragraph";
import dynamic from "next/dynamic";
export default function HomeRoute() {
  const MoonElement = dynamic(() => import("@/components/Moon"));
  return (
    <div id="home">
      <MoonElement />
    </div>
  );
}
