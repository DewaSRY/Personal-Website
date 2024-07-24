import Image from "next/image";
import NavigationSmall from "./_containers/navigation-small";
import NavigationLarge from "./_containers/navigation-large";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=" ">
        <Image
          src="/logos/logo.png"
          width={50}
          height={50}
          alt="dewa surya logo"
          className="my-auto fixed top-4 left-2 z-10"
        />
        <NavigationLarge />
        <NavigationSmall />
      </header>

      <main className="py-8">{children}</main>
      <footer>this is footer</footer>
    </>
  );
}
