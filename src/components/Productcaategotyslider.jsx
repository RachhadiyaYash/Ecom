import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProducts } from "../utils/api";
import { useRouter } from "next/router"; // Import useRouter for navigation

const Productcategoryslidder = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter

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
    // Redirect to product page with category as query parameter
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold pl-4 flex-grow">
          Product Categories
        </h2>
      </div>
      <Slider {...settings}>
        {categories.map(([category, image], index) => (
          <div
            key={index}
            className="px-4 text-left border-green-900 cursor-pointer"
            onClick={() => handleCategoryClick(category)} // Add click handler
          >
            <div className="bg-white rounded shadow-lg border-2 px-4 text-center">
              <img
                src={image}
                alt={category}
                className="h-[290px] p-4 w-full object-fit rounded-md transform transition-transform duration-300 hover:scale-110 z-10"
              />
              <h3 className="text-left">{category}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Productcategoryslidder;
