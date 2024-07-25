import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/swiper-bundle.min.css";
import "../../public/css/scrollCue.css";
import "../../public/css/remixicon.css";
import "../../public/css/flaticon.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import HeaderTop from "@/components/HeaderTop";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CopyRightArea from "@/components/CopyRightArea";
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "University of Rajasthan - Main Website ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <HeaderTop />
        <NavBar />
        <Slider />
        {children}
        <Footer />
        <CopyRightArea />
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/fslightbox.js"></script>
        <script src="/js/scrollCue.min.js"></script>
        <script src="/js/custom.js"></script>
      </body>
    </html>
  );
}
