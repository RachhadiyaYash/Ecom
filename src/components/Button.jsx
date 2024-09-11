import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Button() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center  mx-auto w-[290px] gap-x-14 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        className="relative flex items-center"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`w-12 h-14 rounded-full border-2 border-[#0000FF] flex justify-center items-center ${
            isHovered ? "rounded-none border-transparent" : ""
          }`}
          animate={{
            width: isHovered ? "100%" : "3.5rem",
            borderRadius: isHovered ? "0%" : "100%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#0000FF"
            className="absolute"
            viewBox="0 0 16 16"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "120%" : "100%" }} // Adjust to move the arrow outside
            transition={{ duration: 0.3 }}
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </motion.svg>
        </motion.div>
      </motion.button>
      <motion.p
        className="text-[#0000FF] font-bold"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        Click here to login
      </motion.p>
    </div>
  );
}
