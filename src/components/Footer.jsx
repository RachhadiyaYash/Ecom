import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link href="/" className="flex justify-center lg:justify-start">
                <Image
                  src="/logoipsum-297.svg"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries & 5 million customers. Have
                any query ?
              </p>
              <Link
                href="/contact"
                className="py-2.5 px-5 h-9 block w-fit bg-primary rounded-full
              shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-primary-800
              lg:mx-0"
              >
                Contact us
              </Link>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Pages</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="aboutus" className="hover:text-primary">
                    About us
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="contactus" className="hover:text-primary">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/products?category=men%27s%20clothing"
                    className=" hover:text-primary"
                  >
                    Mens
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="products?category=jewelery"
                    className=" hover:text-primary"
                  >
                    Womens
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/products?category=jewelery"
                    className=" hover:text-primary"
                  >
                    Jewelary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=electronics"
                    className="hover:text-primary"
                  >
                    Electronics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Resources
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/#faq"
                    className="text-gray-600 hover:text-primary"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/aboutus#testimonials"
                    className="text-gray-600 hover:text-primary"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/cart"
                    className="text-gray-600 hover:text-primary"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Tips & Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-md text-gray-500">
                © Crafted with 💕 by {""}
                <Link
                  href="https://rachhadiyayash.github.io/Portfolio/"
                  target="_blank"
                  className="text-primary font-bold underline"
                >
                  {""}Yash rachhadiya
                </Link>{" "}
                2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
