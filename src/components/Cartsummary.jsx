import React from "react";

export default function Cartsummary() {
  return (
    <div className=" flex-1 space-y-6 lg:mt-0 sticky top ">
      <div className="space-y-4 rounded-lg border border-primary p-4 mt-1 shadow-sm   sm:p-6">
        <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Shipping estimate
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                ${shippingEstimate.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Tax estimate
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                ${taxEstimate.toFixed(2)}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
            <dt className="text-base font-bold text-gray-900 ">Order total</dt>
            <dd className="text-base font-bold text-gray-900">
              ${total.toFixed(2)}
            </dd>
          </dl>
        </div>

        <a
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white "
        >
          Proceed to Checkout
        </a>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline"
          >
            Continue Shopping
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-primary  p-4 shadow-sm sm:p-6">
        <div>
          <label
            htmlFor="voucher"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Do you have a voucher or gift card?
          </label>
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
        >
          Apply Code
        </button>
      </div>
    </div>
  );
}
