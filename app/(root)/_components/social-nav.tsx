import { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

import GithubImg from "/icons/github.png";
import LinkedinImg from "/icons/linkedin.png";

interface SocialNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SocialNav({ children, ...resProps }: SocialNavProps) {
  return (
    <div>
      <Link href="/">
        <Image src={GithubImg} alt="github" />
      </Link>
      <Link href="/">
        <Image src={LinkedinImg} alt="linkedin" />
      </Link>
    </div>
  );
}
