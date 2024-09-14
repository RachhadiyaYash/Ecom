import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillQuestionCircleFill,
  BsFillShieldFill,
  BsFillBoxSeamFill,
} from "react-icons/bs";
import faqData from "@/utils/faq.json";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const icons = {
    BsFillQuestionCircleFill: <BsFillQuestionCircleFill className="text-xl" />,
    BsFillShieldFill: <BsFillShieldFill className="text-xl" />,
    BsFillBoxSeamFill: <BsFillBoxSeamFill className="text-xl" />,
  };

  return (
    <div className="md:max-w-7xl  container mx-auto py-8 px-4" id="faq">
      <div className=" ">
        <h1 className="text-2xl my-2 uppercase text-primary font-semibold mb-4">
          How to get started
        </h1>
        <h2 className="text-4xl my-6 font-semibold mb-6">
          Frequently asked questions
        </h2>
      </div>

      <div className="hidden md:flex mx-auto mt-12">
        <div className="flex-shrink-0 border-r border-primary pl-4 pr-12 space-y-4 ">
          {faqData.categories.map((category) => (
            <div
              key={category.key}
              className={`cursor-pointer py-2 text-xl font-semibold px-4 flex items-center space-x-2 rounded ${
                activeCategory === category.key ? "text-primary font-bold" : ""
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span>{icons[category.icon]}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 pl-12 ">
          <AnimatePresence>
            {faqData.items[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                className="accordion py-4 pt-2 border-b border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <button
                  className={`accordion-toggle flex items-center justify-between w-full text-lg font-medium ${
                    activeIndex === index ? "text-primary" : "text-gray-600"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5>{item.question}</h5>
                  <svg
                    className={`text-gray-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`accordion-content overflow-hidden transition-max-height duration-300 ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                >
                  <p className="text-base text-gray-500 mt-2">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto justify-center space-x-2 space-y-2">
          {faqData.categories.map((category) => (
            <div
              key={category.key}
              className={`cursor-pointer py-2 text-sm font-semibold px-2 flex items-center space-x-1 ${
                activeCategory === category.key
                  ? "border-b text-primary border-primary"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span>{icons[category.icon]}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        <div className="p-4 pl-0">
          <AnimatePresence>
            {faqData.items[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                className="accordion py-4 border-b border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <button
                  className={`accordion-toggle flex items-center justify-between w-full text-lg font-medium ${
                    activeIndex === index ? "text-primary" : "text-gray-600"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="text-left">{item.question}</h5>
                  <svg
                    className={`text-gray-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`accordion-content overflow-hidden transition-max-height duration-300 ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                >
                  <p className="text-base text-left text-gray-500 mt-2">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
