import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />

      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
