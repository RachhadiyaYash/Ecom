import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

export default MyApp;
