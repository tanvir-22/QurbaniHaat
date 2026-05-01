import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHaat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
