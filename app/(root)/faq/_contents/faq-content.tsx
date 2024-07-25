import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

import AccordionCard from "../_components/Accordion";

interface FAQContentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function FAQContent({
  children,
  className,
  ...resProps
}: FAQContentProps) {
  return (
    <div className={cn(className)} {...resProps}>
      <AccordionCard.Container className="w-11/12 pt-[64px] pb-[96px] mx-auto">
        <AccordionCard.Card value="q-1">
          <AccordionCard.trigger>
            Do You have Collage Degree ?
          </AccordionCard.trigger>
          <AccordionCard.body>
            I Hope i have one. I have go to collage before but is just not for
            me, i get straggling in collage because i need to do my freelance
            work beside my study and its really dry my energy allot. i chose
            work first, after i have my own money i will love to get an collage
            degree.
          </AccordionCard.body>
        </AccordionCard.Card>
        <AccordionCard.Card value="q-2">
          <AccordionCard.trigger>
            What if the company wont Hiring you wont you to work in office ?
          </AccordionCard.trigger>
          <AccordionCard.body>
            I will love to go to the office. I will love to explore new
            experience, because it is just feel fun to me. If you company base
            on Jakarta i will flay as fast as possible.
          </AccordionCard.body>
        </AccordionCard.Card>
        <AccordionCard.Card value="q-3">
          <AccordionCard.trigger>
            Do you can work with cross team ?
          </AccordionCard.trigger>
          <AccordionCard.body>
            I will love it so much. I am Extrovert person, i love to have talk,
            make Joke also teaching other. Event with someone have no clue what
            is programming is, i will explain it with passion and in interesting
            way
          </AccordionCard.body>
        </AccordionCard.Card>
        <AccordionCard.Card value="q-4">
          <AccordionCard.trigger>
            When you can Start to Wark ?
          </AccordionCard.trigger>
          <AccordionCard.body>
            I will Start to work as fast as possible. My current business is
            handle my family Restaurant. In depth in my heart i love programming
            allot, if someone offer me the programming job of course i will go.
          </AccordionCard.body>
        </AccordionCard.Card>
      </AccordionCard.Container>
    </div>
  );
}
