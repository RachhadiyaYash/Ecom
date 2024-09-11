import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const cartProduct = cartItems.find((item) => item.id === product.id);

  const handleDecreaseQuantity = (productId) => {
    if (cartProduct.quantity === 1) {
      removeFromCart(productId);
    } else {
      decreaseQuantity(productId);
    }
  };

  return (
    <div className="border border-primary p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-[200px] p-4 w-full object-fit rounded-md transform transition-transform duration-300 hover:scale-110 z-10"
        />
      </div>
      <hr />
      <h2 className="mt-3 text-lg font-bold text-black h-[60px] line-clamp-2">
        {product.title}
      </h2>
      <div className="flex flex-row items-center justify-between my-2 ">
        <p className="text-gray-500 text-sm  font-semibold uppercase">
          {product.category}
        </p>
        <p className=" text-primary font-bold">${product.price.toFixed(2)}</p>
      </div>
      {/* <p className="my-4 text-gray-700 h-[65px] text-sm line-clamp-3">
        {product.description}
      </p> */}

      <div className="flex h-[33px] items-center justify-between mt-2">
        <div className="items-center">
          {/* <span className="text-yellow-500 text-lg">
            ⭐ {product.rating.rate}
          </span> */}
          {/* <span className="text-gray-600 ml-2 text-sm">
            ({product.rating.count} reviews)
          </span> */}
        </div>
        <div className="flex justify-between items-center">
          {cartProduct ? (
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 text-black w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-400 transition-colors"
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                -
              </button>
              <span className="text-gray-700">{cartProduct.quantity}</span>
              <button
                className="bg-gray-300 text-black w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-400 transition-colors"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="m-2 p-2 border rounded-full"
              onClick={() => addToCart(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2H8zm-3 0H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <Link
        href={`/product/${product.id}`}
        className=" mt-2 text-blue-700 text-sm justify-end flex"
      >
        View More
      </Link>
    </div>
  );
}
