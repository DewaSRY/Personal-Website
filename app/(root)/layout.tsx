import Headers from "./_containers/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Headers />
      <main>{children}</main>
      <footer>this is footer</footer>
    </>
  );
}
