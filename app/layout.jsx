import Navbar from "@/components/Navbar";
import "./globals.css";

import Provider from "@/components/Provider";

export const metadata = {
  title: "MicroStock",
  description: "Get Stock Images",
};

export default function RootLayout({ children, ...pageProps }) {
  return (
    <html lang="en">
      <body {...pageProps}>
          <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
}
