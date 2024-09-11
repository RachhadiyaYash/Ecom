import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        .required("First name is required"),
      lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Please select a subject"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values); // Log the submitted form data
      toast.success("Message sent successfully!");
      resetForm(); // Clear the form fields after submission
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
            <div className="mt-14 space-y-4">
              <div className="flex items-center gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                <p className="text-white">+1012 3456 789</p>
              </div>
              <div className="flex items-center gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-envelope-at-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                <p className="text-white">demo@gmail.com</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <p className="text-white">
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 p-4 pl-0  mt-auto">
              <a href="#" aria-label="Compass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-compass-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                </svg>
              </a>
              <a href="#" aria-label="Compass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-compass-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                </svg>
              </a>
              <a href="#" aria-label="Compass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-compass-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                </svg>
              </a>
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
                    className={`block py-2.5 pl-2  w-full text-md bg-transparent  border-b-2 border-primary focus:outline-none focus:ring-0  ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6  scale-75 top-3 -z-10 ">
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
                    className={`block py-2.5 pl-2  w-full text-md bg-transparent  border-b-2 border-primary  appearance-none focus:outline-none focus:ring-0  ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6 scale-75 top-3 -z-10 ">
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
                    className={`block py-2.5 pl-2  w-full text-md bg-transparent  border-b-2 border-primary  appearance-none focus:outline-none focus:ring-0  ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6 scale-75 top-3 -z-10 ">
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
                    className={`block py-2.5 pl-2  w-full text-md bg-transparent  border-b-2 border-primary  appearance-none focus:outline-none focus:ring-0  ${
                      formik.errors.phone && formik.touched.phone
                        ? "border-red-600"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="absolute text-lg font-bold transform -translate-y-6 scale-75 top-3 -z-10 ">
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
                  className={`block py-2.5 pl-2  w-full text-md bg-transparent  border-b-2 border-primary  appearance-none focus:outline-none focus:ring-0  ${
                    formik.errors.message && formik.touched.message
                      ? "border-red-600"
                      : ""
                  }`}
                  placeholder=" "
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                <label className="absolute text-lg font-bold transform -translate-y-6 scale-75 top-3 -z-10 ">
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
              <div className=" flex flex-col items-end  justify-end space-y-4">
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
