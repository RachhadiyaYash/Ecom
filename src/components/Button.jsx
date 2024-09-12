import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Button({ text, width = "w-[250px]" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex justify-center  items-center mx-auto ${width} gap-x-6 group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        className="relative flex items-center justify-between "
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Circle and Arrow Container */}
        <motion.div
          className={`w-12 h-14 rounded-full border-2 border-primary flex justify-center items-center ${
            isHovered ? "border-transparent" : ""
          }`}
          animate={{
            width: isHovered ? "100%" : "3.5rem",
            borderRadius: isHovered ? "0%" : "100%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Arrow */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#0D9488"
            className="absolute"
            viewBox="0 0 16 16"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "120%" : "100%" }} // Move arrow when hovered
            transition={{ duration: 0.3 }}
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </motion.svg>
        </motion.div>

        <motion.p
          className="text-primary font-bold py-2 ml-12 whitespace-nowrap"
          initial={{ opacity: 1, x: 0 }}
          animate={{
            opacity: isHovered ? 1 : 1,
            x: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
      </motion.button>
    </div>
  );
}
