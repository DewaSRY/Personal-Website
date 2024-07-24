import Image from "next/image";
import NavigationSmall from "./_containers/navigation-small";
import NavigationLarge from "./_containers/navigation-large";
import Footer from "./_containers/footer";
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
        <NavigationLarge className="z-10" />
        <NavigationSmall className="z-10" />
      </header>

      <main className="py-8">{children}</main>
      <Footer />
    </>
  );
}
