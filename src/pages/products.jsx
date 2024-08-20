import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import PriceFilter from "../components/PriceFilter";
import { fetchProducts } from "../utils/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 1000 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    }
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const withinCategory = category ? product.category === category : true;
    const withinPriceRange =
      product.price >= priceRange.minPrice &&
      product.price <= priceRange.maxPrice;
    return withinCategory && withinPriceRange;
  });

  const clearFilters = () => {
    setCategory("");
    setPriceRange({ minPrice: 0, maxPrice: 1000 });
    resetPriceFilter();
  };

  const resetPriceFilter = () => {};

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-background")) {
      setIsFilterOpen(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block w-full md:w-1/4 p-4 border-2 sticky top-[80px] z-20 h-[480px] mt-4 rounded-md">
            <Filter
              categories={[
                "electronics",
                "jewelery",
                "men's clothing",
                "women's clothing",
              ]}
              setCategory={setCategory}
            />
            <br />
            <PriceFilter
              onFilter={(priceRange) => setPriceRange(priceRange)}
              resetPriceFilter={resetPriceFilter}
            />
            <br />
          </div>

          <div className="w-full md:w-3/4 p-4">
            <div className="md:hidden border-2 border-red-900 sticky top-20 z-20">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                Open Filters
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal for Smaller Screens */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-30 modal-background bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white w-11/12 max-w-lg p-6 rounded-lg">
            {/* Close Icon */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-2 right-2 p-1 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl mb-2">Filters</h2>
            <Filter
              categories={[
                "electronics",
                "jewelery",
                "men's clothing",
                "women's clothing",
              ]}
              setCategory={setCategory}
            />
            <br />
            <PriceFilter
              onFilter={(priceRange) => setPriceRange(priceRange)}
              resetPriceFilter={resetPriceFilter}
            />
          </div>
        </div>
      )}
    </>
  );
}
