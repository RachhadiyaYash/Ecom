import React, { useState } from "react";

export default function Button() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <div
        className="relative flex justify-center items-center gap-x-14 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="relative flex items-center">
          <div
            className={`w-14 h-14 rounded-full border-2 border-[#0000FF] flex justify-center items-center   ${
              isHovered ? "w-full rounded-none border-transparent" : ""
            }`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="#0000FF"
            className={`absolute top-1/2 -translate-y-1/2 -right-8 transition-transform duration-[600ms] ease-in-out ${
              isHovered ? "translate-x-4" : "translate-x-0"
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
        <p className="text-[#0000FF] font-bold transition-colors duration-100 ease-in-out ">
          Click here to login
        </p>
      </div>
    </div>
  );
}
