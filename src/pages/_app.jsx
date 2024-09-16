import { CartProvider } from "../context/CartContext";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/ContactUs.css";
import "../styles/tostify.css";
import "../styles/swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <CartProvider>
        <Preloader />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default MyApp;
