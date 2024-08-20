import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-[80%] p-4 ">
          <div className="relative w-full md:w-[200px] h-[200px] overflow-hidden ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col  w-full md:w-[600px] md:ml-4 mt-4 md:mt-0 pl-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 "> {item.category}</p>
            <p className="text-gray-600 py-4"> Price: ${item.price}</p>
            <div className="flex items-center mt-2 space-x-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <span className="text-lg font-semibold text-gray-800">
                {item.quantity}
              </span>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Remove button */}
        <div className=" md:mt-0 md:w-[20%] md:ml-4 ">
          <button
            className=" py-4 rounded-md flex items-center"
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <span className="sr-only">Remove item</span>
          </button>
        </div>
      </div>
      <hr className="my-2 w-[90%]" />
    </>
  );
}
