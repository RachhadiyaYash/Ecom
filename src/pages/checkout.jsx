import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import StateDistricts from "../utils/stateDistricts.json";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";
import Head from "next/head";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .length(10, "Phone number must be 10 digits")
    .required("Phone number is required"),
  street: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  zipCode: yup
    .string()
    .length(6, "Zip Code must be 6 digits")
    .required("Zip Code is required"),
});

const Checkout = () => {
  const { cartItems } = useCart();
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/products");
    }
  }, [cartItems, router]);

  useEffect(() => {
    setStates(
      StateDistricts.states.map((state) => ({
        value: state.state,
        label: state.state,
      }))
    );
  }, []);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    const state = StateDistricts.states.find(
      (state) => state.state === selectedOption.value
    );
    setDistricts(
      state
        ? state.districts.map((district) => ({
            value: district,
            label: district,
          }))
        : []
    );
    setValue("state", selectedOption.value);
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setValue("district", selectedOption.value);
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const userChoice = confirm(
      "Do you want to be redirected to the payment success page?"
    );

    const orderSummary = {
      subtotal: subtotal.toFixed(2),
      shippingEstimate: shippingEstimate.toFixed(2),
      taxEstimate: taxEstimate.toFixed(2),
      total: total.toFixed(2),
    };

    if (userChoice) {
      router.push({
        pathname: "/paymentsuccessful",
        query: { ...data, ...orderSummary },
      });
    } else {
      router.push("/paymentfailed");
    }
  };

  if (cartItems.length === 0) {
    return <p>Redirecting to your cart...</p>;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const total = subtotal + shippingEstimate + taxEstimate;

  return (
    <>
      <Head>
        <title>Checkout | eCommerce</title>
        <link rel="icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <div className="md:max-w-7xl mx-auto px-4 container mx-auto py-12 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 border-b-4 border-primary pb-2">
            Checkout
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="space-y-6 rounded-lg ">
            <p className="text-xl font-semibold text-gray-800">Order Summary</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-600">
                  Subtotal
                </span>
                <span className="text-base font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-600">
                  Shipping Estimate
                </span>
                <span className="text-base font-semibold text-gray-900">
                  ${shippingEstimate.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-600">
                  Tax Estimate
                </span>
                <span className="text-base font-semibold text-gray-900">
                  ${taxEstimate.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2 font-bold text-gray-900">
                <span>Order Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Personal Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder="First name"
                        className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder="Last name"
                        className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type="email"
                        placeholder="Email address"
                        className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type="tel"
                        placeholder="Phone number"
                        className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Shopping Address
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Controller
                    name="street"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          type="text"
                          placeholder="Street address"
                          className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                        />
                        {errors.street && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.street.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          type="text"
                          placeholder="City"
                          className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Select
                          {...field}
                          value={selectedState}
                          options={states}
                          placeholder="State"
                          onChange={handleStateChange}
                          className="w-full"
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="district"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Select
                          {...field}
                          value={selectedDistrict}
                          options={districts}
                          placeholder="District"
                          onChange={handleDistrictChange}
                          className="w-full"
                        />
                        {errors.district && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.district.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="zipCode"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          type="text"
                          placeholder="Zip Code"
                          className="px-4 py-3 border-2 rounded-md border-gray-300 w-full focus:border-primary focus:ring focus:ring-primary/20 transition"
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.zipCode.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
