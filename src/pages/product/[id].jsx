import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchProductById } from "../../utils/api";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const { addToCart, removeFromCart, updateCartItemQuantity } = useCart();

  useEffect(() => {
    if (id) {
      async function loadProduct() {
        const productData = await fetchProductById(id);
        setProduct(productData);
        setSelectedImage(productData.image); // Set default selected image
      }
      loadProduct();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateCartItemQuantity(product.id, newQuantity);
  };

  // Array to simulate multiple thumbnails
  const thumbnails = [1, 2, 3]; // Simulating three thumbnails

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col space-y-4">
            {thumbnails.map((_, index) => (
              <div
                key={index}
                className={`h-20 w-20 cursor-pointer border border-gray-300 rounded-lg overflow-hidden relative ${
                  selectedImage === product.image ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => {
                  console.log(`Thumbnail clicked: ${product.image}`); // Debug log
                  setSelectedImage(product.image);
                }}
              >
                <img
                  src={product.image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`object-cover w-full h-full transition-transform ${
                    index === 1 ? "opacity-75" : index === 2 ? "grayscale" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src={selectedImage}
              alt={product.title}
              className="h-80 w-full object-contain shadow-lg rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            {product.category}
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-l-lg"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-2 text-xl">{quantity}</span>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-r-lg"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
