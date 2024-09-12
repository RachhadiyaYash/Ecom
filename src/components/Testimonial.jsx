// import React from "react";

// export default function Testimonal() {
//   return (
//     <div>
//       <section className="bg-white  container px-4 py-12 mx-auto">
//         <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Our Clients Have Alot To Tell
//           </h2>
//           <h4 className="text-center text-md my-8 font-bold tracking-tight text-gray-900 sm:text-lg">
//             CLIENTS TESTIMONIALS
//           </h4>

//           <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import testimonial from "../utils/stateDistricts.json";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    const fetchTestimonials = async () => {
      const response = await fetch("/utils/testimonials.json");
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  // Helper function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={`full-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}

        {/* Render half star */}
        {halfStar && (
          <svg
            key="half"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            <path
              d="M10 12.4V3.24L12.09 8.63l5.91.51-4.59 3.97L15.18 18z"
              fill="#D1D5DB"
            />
          </svg>
        )}

        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={`empty-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="mt-8 sm:columns-2 lg:columns-3">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-8 sm:break-inside-avoid shadow-xl">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt={testimonial.name}
                src={testimonial.image}
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">{testimonial.testimonial}</p>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
