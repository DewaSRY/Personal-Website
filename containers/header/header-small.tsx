import { ComponentProps, PropsWithChildren, useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import NavContainer from "./nav-container";
import SocialContainer from "./social-container";
import { cn } from "@/lib/utils";
import Hamburger from "./hamburger";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface HeaderSmallProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeaderSmall({
  children,
  ...resProps
}: HeaderSmallProps) {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <Drawer>
      <div className="fixed top-2 right-2 z-50">
        <DrawerTrigger>
          <Hamburger className="lg:hidden" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="">
        <DrawerClose className="absolute right-2 top-7 sm:hidden">
          <Button variant="primary" className="text-white">
            <X />
          </Button>
        </DrawerClose>
        <DrawerHeader
          className={cn(
            "mx-auto w-full max-w-sm text-white-one",
            " py-4 px-6 "
          )}
        >
          <DrawerTitle className="text-left">Dewa Surya Ariesta</DrawerTitle>
          <DrawerDescription className="text-white text-left">
            I will help you to build a beautiful and cool website
          </DrawerDescription>
        </DrawerHeader>
        <hr />
        <NavContainer className="mt-12 mx-2" />
        <DrawerFooter>
          <SocialContainer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
