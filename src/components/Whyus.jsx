import React from "react";

const Whyus = () => {
  return (
    <div className="container md:max-w-7xl px-4  mx-auto py-12">
      <div className="mx-auto">
        <h1 className="text-2xl my-2 uppercase text-primary text-left  font-semibold mb-4">
          Why Choose Us?
        </h1>
        <p className="mt-2 text-3xl font-semibold text-gray-800 sm:text-4xl text-left ">
          We are e-commerce specialists, offering unbeatable value.
        </p>
        <p className="mt-4 text-lg  text-left text-gray-500 md:w-2/3">
          From seamless shopping experiences to hassle-free returns, we put
          customers first. With a wide range of products and secure
          transactions, we guarantee your satisfaction.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 ">
            <div className="flex-shrink-0 ">
              <img
                src="/fast-delivery-svgrepo-com.svg"
                alt="Fast Delivery"
                className="h-20 w-20"
              />
            </div>
            <div className="">
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                Fast Delivery
              </h2>
              <p className="text-base text-gray-500">
                We ensure quick and reliable delivery across the globe, ensuring
                your products arrive on time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4  p-6 ">
            <div className="flex-shrink-0">
              <img
                src="/return-svgrepo-com.svg"
                alt="Easy Returns"
                className="h-20 w-20"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                Easy Returns
              </h2>
              <p className="text-base text-gray-500">
                Shop with confidence knowing you can return any product easily
                and hassle-free within 30 days.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 p-6">
            <div className="flex-shrink-0">
              <img
                src="/pricing-workspace-svgrepo-com.svg"
                alt="Competitive Pricing"
                className="h-20 w-20"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                Competitive Pricing
              </h2>
              <p className="text-base text-gray-500">
                Our prices are hard to beat, and we offer regular discounts and
                promotions to maximize your savings.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4  p-6">
            <div className="flex-shrink-0">
              <img
                src="/24-hours-support-svgrepo-com.svg"
                alt="24/7 Customer Support"
                className="h-20 w-20"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                24/7 Customer Support
              </h2>
              <p className="text-base text-gray-500">
                Our customer service team is available 24/7 to assist with your
                questions and concerns, ensuring a smooth shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
