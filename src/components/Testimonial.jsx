import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import data from "../utils/testimonial.json";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(data);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 15.27l-3.18 1.67.61-3.56-2.58-2.51 3.56-.52L10 7l1.39 2.34 3.56.52-2.58 2.51.61 3.56L10 15.27z" />
      </svg>
    ));
  };

  return (
    <div>
      <div className="mx-auto md:max-w-7xl container   px-4 py-24 ">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full ">
            <h2 className=" flex-grow  text-2xl my-2 uppercase text-primary font-semibold mb-4">
              Testimonials
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              23k+ Customers gave their{" "}
              <span className="bg-clip-text text-primary">Feedback</span>
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-lg hover:bg-primary"
                data-carousel-prev
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-lg hover:bg-primary"
                data-carousel-next
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={28}
              slidesPerView={2}
              loop
              pagination={{ clickable: true }}
              navigation={{
                nextEl: "#slider-button-right",
                prevEl: "#slider-button-left",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-primary hover:border-2"
                >
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src={testimonial.avatar}
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    {testimonial.feedback}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
