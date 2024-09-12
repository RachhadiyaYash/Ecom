"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProducts } from "../utils/api";
import { useRouter } from "next/router";

const Productcategoryslidder = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const categoryMap = new Map();
        data.forEach((product) => {
          if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, product.image);
          }
        });
        const uniqueCategories = Array.from(categoryMap.entries());
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const settings = {
    dots: false,

    arrows: false, // Disable side arrows
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  return (
    <div className=" md:max-w-7xl container  mx-auto  px-4 py-8">
      <div className="flex items-center mb-4">
        <h2 className=" flex-grow  text-2xl my-2 uppercase text-primary font-semibold mb-4">
          Product Categories
        </h2>
      </div>
      <Slider {...settings}>
        {categories.map(([category, image], index) => (
          <div
            key={index}
            className=" sm:px-4 text-center cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="bg-white rounded-xl shadow-lg border-2 p-4 text-center">
              <img
                src={image}
                alt={category}
                className="max-h-[200px] w-full object-fit rounded-md transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-center font-semibold text-lg mt-2">
                {category}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Productcategoryslidder;
