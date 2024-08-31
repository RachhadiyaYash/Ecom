import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cart() {
  const { cartItems } = useCart();
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const total = subtotal + shippingEstimate + taxEstimate;

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      router.push({
        pathname: "/checkout",
        query: { total: total.toFixed(2) },
      });
    } else {
      alert("Your cart is empty. Add items to the cart before proceeding.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Image
            src="/empty_cart.svg"
            alt="Empty shopping cart"
            width={600}
            height={600}
            className="mb-4"
          />
          <p className="text-3xl font-bold mb-6 text-center">
            Your Cart Is Empty
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/5">
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5 h-full sticky top-24 bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping estimate</span>
              <span>${shippingEstimate.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax estimate</span>
              <span>${taxEstimate.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Order total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
