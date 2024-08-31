import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter

const Navbar = () => {
  const { cartItems } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(itemsCount);
  }, [cartItems]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    // Close the menu
    setIsMenuOpen(false);
    // Redirect to the specified page
    router.push(href);
  };

  const router = useRouter(); // Initialize useRouter

  return (
    <div className="bg-blue-300 top-0 sticky z-50">
      <nav className="container mx-auto relative px-4 py-4 flex justify-between items-center bg-blue-300 sticky top-0">
        <Link href="/" className="text-3xl font-bold leading-none">
          <Image
            src="/logoipsum-285.svg"
            alt="Empty shopping cart"
            width={200}
            height={200}
          />
        </Link>

        <div className="lg:hidden flex items-center space-x-4">
          <Link href="/cart" className="text-lg relative">
            <Image
              src="/cart-icon.svg"
              alt="Empty shopping cart"
              width={24}
              height={24}
            />
            {totalItems > 0 && (
              <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white  font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link href="/" className="font-bold">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link href="/products" className="font-bold">
              Products
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link href="/aboutus" className="font-bold">
              About Us
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link href="/products" className="font-bold">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex lg:ml-auto lg:space-x-5 mx-3">
          <Link href="/cart" className="text-lg relative">
            <Image
              src="/cart-icon.svg"
              alt="Empty shopping cart"
              width={30}
              height={30}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="navbar-menu relative z-50 lg:hidden">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link href="/" className="text-3xl font-bold leading-none">
                <Image
                  src="/logoipsum-285.svg"
                  alt="Empty shopping cart"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <ul>
              <li className="mb-1">
                <a
                  onClick={() => handleLinkClick("/")}
                  className="text-lg block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => handleLinkClick("/aboutus")}
                  className="text-lg block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => handleLinkClick("/products")}
                  className="text-lg block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => handleLinkClick("/contact")}
                  className="text-lg block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                className="block py-2 px-2 text-center text-xs font-bold rounded-xl"
                href="https://rachhadiyayash.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crafted with 💕 By <br />
                Yash Raachhadiya
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
