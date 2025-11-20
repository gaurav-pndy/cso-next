import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "CSO",
  description:
    "Building a foundation of knowledge, opportunity, and empowerment through four transformative initiatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
