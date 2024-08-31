import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Herosection() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            corporis impedit. Perferendis neque, debitis, iusto quis voluptatum,
            eveniet dolore animi rerum mollitia reiciendis aliquam sapiente
            deleniti dolorem quo eaque labore.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            corporis impedit. Perferendis neque, debitis, iusto quis voluptatum,
            eveniet dolore animi rerum mollitia reiciendis aliquam sapiente
            deleniti dolorem quo eaque labore.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            corporis impedit. Perferendis neque, debitis, iusto quis voluptatum,
            eveniet dolore animi rerum mollitia reiciendis aliquam sapiente
            deleniti dolorem quo eaque labore.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            corporis impedit. Perferendis neque, debitis, iusto quis voluptatum,
            eveniet dolore animi rerum mollitia reiciendis aliquam sapiente
            deleniti dolorem quo eaque labore.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
