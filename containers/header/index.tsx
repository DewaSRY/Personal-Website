import { ComponentProps, PropsWithChildren } from "react";

import Paragraph from "@/components/common/paragraph";
export default function index() {
  return (
    <div className="flex justify-evenly">
      <Paragraph.Description type="quote" className="text-white">
        Dewa Surya Ariesta
      </Paragraph.Description>

      <div className="flex gap-4">
        <Paragraph.Description className="text-white">
          Home
        </Paragraph.Description>
        <Paragraph.Description className="text-white">
          Contact
        </Paragraph.Description>
      </div>
    </div>
  );
}
