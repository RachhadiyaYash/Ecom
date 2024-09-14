import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProducts } from "../utils/api";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

const RelatedProductsSlider = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { cartItems } = useCart();

  useEffect(() => {
    const loadRelatedProducts = async () => {
      if (cartItems.length === 0) return;

      const products = await fetchProducts();

      const cartCategories = [
        ...new Set(cartItems.map((item) => item.category)),
      ];

      const related = products.filter(
        (product) =>
          cartCategories.includes(product.category) &&
          !cartItems.some((cartItem) => cartItem.id === product.id)
      );

      setRelatedProducts(related);
    };

    loadRelatedProducts();
  }, [cartItems]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: false, // Disable side arrows
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Only render the component if related products exist
  if (relatedProducts.length === 0) {
    return null; // This will hide the entire section
  }

  return (
    <div className="py-24">
      <h2 className="text-2xl my-6 uppercase text-primary font-semibold mb-4">
        People Also Buy Together
      </h2>
      {relatedProducts.length === 1 ? (
        <div className="p-4 rounded-lg shadow-sm mx-auto w-[290px]">
          <ProductCard product={relatedProducts[0]} />
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {relatedProducts.map((product) => (
            <div key={product.id} className="p-4">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default RelatedProductsSlider;
