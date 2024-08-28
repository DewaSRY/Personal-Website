import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@container/header";
import Footer from "@container/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DewaSRY | Personal",
  description:
    "DewaSRY with full name, Dewa Surya Ariesta is full stack developer with hight experience",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        rel: "icon",
      },
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        rel: "apple-touch-icon",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        rel: "icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn(inter.className, "")}>
        <Header />
        <main
          className={cn(
            "bg-gradient-to-t from-background to-gray-200 ",
            "pt-14 min-h-[100vh]"
          )}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
