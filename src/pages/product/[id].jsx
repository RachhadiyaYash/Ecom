import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchProductById } from "../../utils/api";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      async function loadProduct() {
        const productData = await fetchProductById(id);
        setProduct(productData);
      }
      loadProduct();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-contain shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
