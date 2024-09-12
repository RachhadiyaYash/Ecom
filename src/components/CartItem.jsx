import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="rounded-lg border border-primary p-6 my-2">
      <div className="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
        <div className="md:w-[250px] md:h-[120px] h-20 w-20">
          <a href="#" className="shrink-0 md:order-1">
            <img
              className="h-auto w-full aspect-square"
              src={item.image}
              alt={item.title}
            />
          </a>
        </div>
        <div className="flex flex-col w-full justify-between items-start md:pl-12">
          <p className="font-bold w-full h-auto">{item.title}</p>
          <button
            className="py-6 rounded-md flex items-center"
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#8B0000"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <p className="px-2 text-[#8B0000] font-semibold">Remove item</p>
          </button>
        </div>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
              onClick={() => decreaseQuantity(item.id)}
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
              value={item.quantity}
              readOnly
            />
            <button
              type="button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
              onClick={() => increaseQuantity(item.id)}
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">${subtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
