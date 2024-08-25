import Image from "next/image";
import Header from "@container/header";

import Footer from "../../containers/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=" ">
        <Header />
      </header>
      <main className="py-8">{children}</main>
      <Footer />
    </>
  );
}
