import "./globals.css";
import { Public_Sans } from "next/font/google";
import { label } from "@/config/appLabel";
import { Analytics } from "@vercel/analytics/react";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{label.htmlTitle}</title>
        <link
          rel="icon"
          href="/images/logo.png"
          sizes="35x35"
          type="image/png"
        ></link>
        <meta name="description" content={label.description} />
        <meta property="og:title" content={label.title} />
        <meta property="og:description" content={label.description} />
        <meta property="og:image" content="/images/mobile-view.png" />
        <meta name="twitter:card" content="/images/desktop-view.png" />
        <meta name="twitter:title" content={label.title} />
        <meta name="twitter:description" content={label.description} />
        <meta name="twitter:image" content="/images/desktop-view.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-1 md:p-10 h-[100vh]">{children}</div>
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}
