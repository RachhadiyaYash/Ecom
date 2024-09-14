import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      inquiryType: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "First name must contain only letters")
        .required("Required"),
      lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Required"),
      subject: Yup.string().required("Please select a subject"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Message sent successfully!");
      resetForm();
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container md:max-w-7xl mx-auto  px-4 pt-12 pb-24 ">
        <p className="text-center text-4xl font-bold mt-8 mb-2 text-primary">
          Contact Us
        </p>
        <p className="text-center text-xl mb-8">
          Any question or remarks? Just write us a message!
        </p>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-y-3  bg-white">
          <div className="flex flex-col md:w-1/3 rounded-t-xl bg-primary p-6  overflow-hidden relative">
            <div>
              <p className="text-2xl text-white font-bold">
                Contact Information
              </p>
              <p className="text-white">Say something to start a live chat!</p>
            </div>
            <div className="mt-14  pb-12 space-y-4">
              <div className="flex items-center gap-3 py-2">
                <Link href="/">
                  <Image
                    src="/call-chat-svgrepo-com.svg"
                    alt="call"
                    width={26}
                    height={26}
                  />
                </Link>
                <p className="text-white">+1012 3456 789</p>
              </div>
              <div className="flex items-center gap-3 py-2">
                <Link href="/">
                  <Image
                    src="/email-svgrepo-com.svg"
                    alt="email"
                    width={26}
                    height={26}
                  />
                </Link>
                <p className="text-white">demo@gmail.com</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <Link href="/">
                  <Image
                    src="/maps-svgrepo-com.svg"
                    alt="adress"
                    width={26}
                    height={26}
                  />
                </Link>
                <p className="text-white">
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 p-4 pl-0  mt-auto">
              <Link
                href="https://rachhadiyayash.github.io/Portfolio/"
                target="_blank"
              >
                <Image
                  src="/discord-svgrepo-com.svg"
                  alt="discord"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://rachhadiyayash.github.io/Portfolio/"
                target="_blank"
              >
                <Image
                  src="/insta-svgrepo-com.svg"
                  alt="insta"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://rachhadiyayash.github.io/Portfolio/"
                target="_blank"
              >
                <Image
                  src="/twitter-svgrepo-com.svg"
                  alt="twitter"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <img
              src="/Ellipse 794.svg"
              alt=""
              className="absolute bottom-[-30px] right-[-40px] w-34 h-34 object-contain "
            />
          </div>

          <div className="flex-1 border-b-2 border-primary  md:w-2/3 p-6  ">
            <form className="mx-auto" onSubmit={formik.handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    className={`block pt-4 pb-2   w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 -ml-3">
                    First Name
                  </label>
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastName"
                    className={`block pt-4 pb-2   w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 -ml-3">
                    Last Name
                  </label>
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="email"
                    className={`block pt-4 pb-2   w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 -ml-2">
                    Email
                  </label>
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="phone"
                    className={`block pt-4 pb-2   w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 -ml-2">
                    Phone
                  </label>
                  {formik.errors.phone && formik.touched.phone ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="message"
                  rows="1"
                  className={`block pt-4 pb-2   w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "border-red-600"
                      : ""
                  }`}
                  placeholder=" "
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 -ml-3">
                  Message
                </label>
                {formik.errors.message && formik.touched.message ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 mt-10 group">
                <p className="mb-2 text-sm font-bold">Subject</p>
                <div className="flex flex-wrap gap-4">
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="subject"
                      value="Order"
                      checked={formik.values.subject === "Order"}
                      onChange={formik.handleChange}
                    />
                    <span className="checkmark"></span> Order Related Inquiry
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="subject"
                      value="general"
                      checked={formik.values.subject === "general"}
                      onChange={formik.handleChange}
                    />
                    <span className="checkmark"></span> General Inquiry
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="subject"
                      value="shopping"
                      checked={formik.values.subject === "shopping"}
                      onChange={formik.handleChange}
                    />
                    <span className="checkmark"></span> Shopping Inquiry
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="subject"
                      value="job"
                      checked={formik.values.subject === "job"}
                      onChange={formik.handleChange}
                    />
                    <span className="checkmark"></span> Career Inquiry
                  </label>
                </div>
                {formik.errors.subject && formik.touched.subject ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.subject}
                  </div>
                ) : null}
              </div>

              <br />

              <div className="flex md:justify-end justify-center  ">
                <div className=" w-auto ">
                  <Button text="Send Message" type="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
