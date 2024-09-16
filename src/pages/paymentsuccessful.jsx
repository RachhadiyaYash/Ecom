import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function PaymentSuccessful() {
  const router = useRouter();
  const {
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    state,
    district,
    zipCode,
    subtotal,
    shippingEstimate,
    taxEstimate,
    total,
  } = router.query;

  return (
    <>
      <Head>
        <title>Payment Successful | eCommerce</title>
      </Head>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-2">
            Thanks for your order, {firstName} {lastName}!
          </h2>
          <p className="text-gray-500 mb-6">
            Your order will be processed within 24 hours. Here's the summary:
          </p>
          <div className="space-y-4 rounded-lg border border-gray-100 bg-primary-50 p-6 mb-6">
            <dl className="sm:flex justify-between">
              <dt className="font-bold">Name:</dt>
              <dd className="text-gray-900">
                {firstName} {lastName}
              </dd>
            </dl>
            <dl className="sm:flex justify-between">
              <dt className="font-bold">Email:</dt>
              <dd className="text-gray-900">{email}</dd>
            </dl>
            <dl className="sm:flex justify-between">
              <dt className="font-bold">Phone:</dt>
              <dd className="text-gray-900">{phone}</dd>
            </dl>
            <dl className="sm:flex justify-between">
              <dt className="font-bold">Address:</dt>
              <dd className="text-gray-900">
                {street}, {city}, {district}, {state}, {zipCode}
              </dd>
            </dl>
          </div>

          {/* Order Summary */}
          <div className="space-y-4 rounded-lg border border-gray-100 bg-primary-50 p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Order Summary
            </h3>
            <dl className="sm:flex justify-between">
              <dt className="font-semibold">Subtotal:</dt>
              <dd className="text-gray-900">${subtotal}</dd>
            </dl>
            <dl className="sm:flex justify-between">
              <dt className="font-semibold">Shipping Estimate:</dt>
              <dd className="text-gray-900">${shippingEstimate}</dd>
            </dl>
            <dl className="sm:flex justify-between">
              <dt className="font-semibold">Tax Estimate:</dt>
              <dd className="text-gray-900">${taxEstimate}</dd>
            </dl>
            <dl className="sm:flex justify-between font-bold text-gray-900">
              <dt>Total:</dt>
              <dd>${total}</dd>
            </dl>
          </div>

          <Link
            href="/products"
            className="py-2.5 px-5 text-white bg-primary hover:text-primary rounded-lg hover:bg-gray-100"
          >
            Return to shopping
          </Link>
        </div>
      </section>
    </>
  );
}
