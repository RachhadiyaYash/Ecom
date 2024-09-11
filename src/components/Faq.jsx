import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillQuestionCircleFill,
  BsFillShieldFill,
  BsFillGearFill,
} from "react-icons/bs";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      name: "General",
      key: "general",
      icon: <BsFillQuestionCircleFill className="text-xl" />,
    },
    {
      name: "Support",
      key: "support",
      icon: <BsFillShieldFill className="text-xl" />,
    },
    {
      name: "Others",
      key: "others",
      icon: <BsFillGearFill className="text-xl" />,
    },
  ];

  const faqItems = {
    general: [
      {
        question: "Can I cancel at anytime?",
        answer:
          "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
      },
      {
        question: "How does Preline's pricing work?",
        answer:
          "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
      },
      {
        question: "How secure is Preline?",
        answer:
          "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
      },
      {
        question: "How can I reset my password?",
        answer:
          "To reset your password, click on 'Forgot password' on the login page, enter your email address, and follow the instructions sent to your email.",
      },
    ],
    support: [
      {
        question: "How secure is Preline?",
        answer:
          "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
      },
      {
        question: "How can I reset my password?",
        answer:
          "To reset your password, click on 'Forgot password' on the login page, enter your email address, and follow the instructions sent to your email.",
      },
      {
        question: "How secure is Preline?",
        answer:
          "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
      },
      {
        question: "How can I reset my password?",
        answer:
          "To reset your password, click on 'Forgot password' on the login page, enter your email address, and follow the instructions sent to your email.",
      },
      {
        question: "How secure is Preline?",
        answer:
          "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
      },
      {
        question: "How can I reset my password?",
        answer:
          "To reset your password, click on 'Forgot password' on the login page, enter your email address, and follow the instructions sent to your email.",
      },
    ],
    others: [
      {
        question: "How do I get access to a theme I purchased?",
        answer:
          "If you lose the link for a theme you purchased, don't panic! You can login to your account, tap your avatar in the upper right corner, and tap Purchases.",
      },
      {
        question: "Upgrade License Type",
        answer:
          "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="pl-8">
        <h1 className="text-2xl my-2 uppercase text-primary font-semibold mb-4">
          How to get started
        </h1>
        <h2 className="text-4xl my-6 font-semibold mb-6">
          Frequently asked questions
        </h2>
      </div>

      {/* Large screens layout */}
      <div className="hidden md:flex mx-auto">
        {/* Left Sidebar */}
        <div className="flex-shrink-0 w-1/4 border-r border-primary p-4 pr-12 space-y-4">
          {faqCategories.map((category) => (
            <div
              key={category.key}
              className={`cursor-pointer py-2 text-xl font-semibold px-4 flex items-center space-x-2 rounded ${
                activeCategory === category.key ? "text-primary font-bold" : ""
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 p-4 pl-12">
          <AnimatePresence>
            {faqItems[activeCategory].map((item, index) => (
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

      <div className="md:hidden">
        <div className="flex flex-wrap items-center justify-center p-2 space-x-2 space-y-2">
          {faqCategories.map((category) => (
            <div
              key={category.key}
              className={`cursor-pointer py-2 text-sm  font-semibold px-2 flex items-center space-x-1  ${
                activeCategory === category.key
                  ? "border-b  text-primary border-primary"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        <div className="p-4">
          <AnimatePresence>
            {faqItems[activeCategory].map((item, index) => (
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
