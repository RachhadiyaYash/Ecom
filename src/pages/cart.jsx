import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Image from "next/image";

export default function Cart() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingEstimate = 5.0; // Example fixed shipping cost
  const taxEstimate = 8.32; // Example fixed tax cost
  const total = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/5">
          {cartItems.length === 0 ? (
            <>
              <div className=" flex justify-start p-5 ">
                <Image
                  src="/empty_cart.svg"
                  alt="Empty shopping cart"
                  width={600}
                  height={600}
                />
              </div>
              <br />
              <br />
              <br />
              <p className="text-3xl font-bold mb-6">Your Cart Is Empty</p>
            </>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Order Summary */}
        {cartItems.length > 0 && (
          <div className="w-full md:w-2/5 h-full sticky top-10 bg-gray-100 p-4 rounded-lg shadow-lg">
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
            <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
