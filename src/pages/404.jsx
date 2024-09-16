// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="container md:max-w-7xl px-4 py-24 mx-auto border ">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
          Something's missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-800">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <Link
          href="/"
          className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
