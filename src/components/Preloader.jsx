import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img
          src="/infinite-spinner.svg"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    )
  );
};

export default Preloader;
