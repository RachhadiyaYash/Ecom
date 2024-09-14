import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import StateDistricts from "../utils/stateDistricts.json";
import { useCart } from "../context/CartContext";
import Link from "next/link";

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

  useEffect(() => {
    // Fetch states from the JSON file
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
    setValue("state", selectedOption.value); // Update the form state
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setValue("district", selectedOption.value); // Update the form state
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
    console.log(data);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const total = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
          Checkout
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 rounded-lg border border-primary p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-900">Order Summary</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-base font-normal text-gray-500">
                Subtotal
              </span>
              <span className="text-base font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base font-normal text-gray-500">
                Shipping Estimate
              </span>
              <span className="text-base font-medium text-gray-900">
                ${shippingEstimate.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base font-normal text-gray-500">
                Tax Estimate
              </span>
              <span className="text-base font-medium text-gray-900">
                ${taxEstimate.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-gray-900">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-300 mb-4">01</h3>
          <h3 className="text-xl font-bold text-gray-800 mb-8">
            Personal Details
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    placeholder="Phone number"
                    className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold text-gray-300 mb-4">02</h3>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Shopping Address
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="street"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                    />
                  )}
                />
                {errors.street && (
                  <p className="text-red-500">{errors.street.message}</p>
                )}

                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                    />
                  )}
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}

                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      value={selectedState} // Set selected state value
                      options={states}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        handleStateChange(selectedOption);
                      }}
                      placeholder="State"
                      className="basic-single"
                    />
                  )}
                />
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}

                <Controller
                  name="district"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      value={selectedDistrict} // Set selected district value
                      options={districts}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        handleDistrictChange(selectedOption);
                      }}
                      placeholder="District"
                      className="basic-single"
                    />
                  )}
                />
                {errors.district && (
                  <p className="text-red-500">{errors.district.message}</p>
                )}

                <Controller
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3 border-2 rounded-md border-gray-300 w-full"
                    />
                  )}
                />
                {errors.zipCode && (
                  <p className="text-red-500">{errors.zipCode.message}</p>
                )}
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
