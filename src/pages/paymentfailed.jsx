import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PaymentFailed() {
  return (
    <>
      <Head>
        <title>Payment Failed | eCommerce</title>
      </Head>
      <section className="container  md:max-w-7xl mx-auto px-4 py-24">
        <div className="relative w-full h-48 md:h-64 mx-auto mb-6">
          <Image
            src="/payment failed.svg"
            alt="Payment Failed"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <br />
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center mb-2">
          Oops! Your payment failed.
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Something went wrong with your payment. Please try again or contact
          support.
        </p>
        <div className="flex justify-center">
          <Link
            href="/checkout"
            className="py-2.5 px-5 text-white bg-primary rounded-lg hover:bg-primary-dark"
          >
            Try Again
          </Link>
        </div>
      </section>
    </>
  );
}
