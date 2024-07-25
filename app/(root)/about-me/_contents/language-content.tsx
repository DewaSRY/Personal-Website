import { ComponentProps, PropsWithChildren } from "react";
import LanguageCard from "../_components/language-card";
interface LanguageContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function LanguageContent({
  children,
  ...resProps
}: LanguageContentProps) {
  return (
    <div className="grid grid-cols-auto-fit-350 md:grid-cols-auto-fit-750 gap-4">
      <LanguageCard.Card>
        <LanguageCard.Image
          imgAlt="java"
          imgSrc="/programming-language/java.png"
        />
        <LanguageCard.Body>
          Java is my first language, and I absolutely love coding with it! It's
          such a fun language, filled with cool concepts that make every project
          exciting. I get genuinely thrilled learning Java principles like
          SOLID, OOP, and design patterns. They make me feel sharp and
          intellectually engaged, and I enjoy every moment of it.
        </LanguageCard.Body>
      </LanguageCard.Card>

      <LanguageCard.Card>
        <LanguageCard.Image
          imgAlt="python"
          imgSrc="/programming-language/python.png"
        />
        <LanguageCard.Body>
          I absolutely love Python because it makes writing code feel like
          writing English! It's so intuitive and fun to use. I get a real kick
          out of solving LeetCode problems with Python, and I'm excited to dive
          into machine learning with it soon. The possibilities with Python are
          endless, and I can't wait to explore them all!
        </LanguageCard.Body>
      </LanguageCard.Card>

      <LanguageCard.Card>
        <LanguageCard.Image
          imgAlt="rust"
          imgSrc="/programming-language/rust.png"
        />
        <LanguageCard.Body>
          Rust has an amazing community and is incredibly exciting to learn! The
          documentation is one of my favorites—it's so clear and helpful. Rust
          brings fresh, innovative rules to writing code, and I find that
          thrilling. I've had the opportunity to create tools with Rust, and I
          absolutely love it. Every project with Rust feels like a new
          adventure!
        </LanguageCard.Body>
      </LanguageCard.Card>
      <LanguageCard.Card>
        <LanguageCard.Image
          imgAlt="javascript"
          imgSrc="/programming-language/javascript.png"
        />
        <LanguageCard.Body>
          JavaScript is such an interesting language! Coding with JavaScript is
          always an adventure because it offers so many possibilities. Even
          though the team often expects us to use existing npm libraries instead
          of creating new ones, I absolutely love working with it. The vibrant
          ecosystem and the creative solutions we can build together make every
          day exciting.
        </LanguageCard.Body>
      </LanguageCard.Card>
    </div>
  );
}
