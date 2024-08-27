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
      <main className="py-8">{children}</main>
    </>
  );
}
