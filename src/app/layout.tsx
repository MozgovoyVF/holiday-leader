import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "./provider/query.provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Holiday",
  description: "Business card website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="modal"></div>
          {children}
          <Toaster theme="dark" position="bottom-right" duration={1500} />
        </Providers>
      </body>
    </html>
  );
}
