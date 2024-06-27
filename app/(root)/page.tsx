import Image from "next/image";

import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

export default function Home() {
  return (
    <div className="bg-primary-one text-primary-two">
      <Heading.H1>Software Developer</Heading.H1>
      <Heading.H2>Software Developer</Heading.H2>
      <Heading.H3>Tools I use</Heading.H3>
      <Heading.H4>Tools name is</Heading.H4>
      <ul>
        <li>
          <Paragraph.List>i have Todo</Paragraph.List>
        </li>
        <li>
          <Paragraph.List>i have Todo</Paragraph.List>
        </li>
      </ul>
      <Paragraph.Description>this is Description</Paragraph.Description>
      <Paragraph.Date>DD-MM-YY</Paragraph.Date>
      <Paragraph.Nav>This is Navigation</Paragraph.Nav>
    </div>
  );
}
