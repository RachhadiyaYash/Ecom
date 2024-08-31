// pages/checkout.jsx
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import StateDistricts from "../utils/stateDistricts.json";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext"; // Import useCart

const Checkout = () => {
  const router = useRouter();
  const { query } = router;
  const { cartItems } = useCart(); // Access cart items from context
  const [districtOptions, setDistrictOptions] = useState([]);

  // Check if cart is empty and redirect if needed
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart"); // Redirect to cart page if cart is empty
    }
  }, [cartItems, router]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Parse states from the JSON
  const states = StateDistricts.states.map((state) => ({
    value: state.state,
    label: state.state,
  }));

  const handleStateChange = (selectedOption) => {
    const selectedState = StateDistricts.states.find(
      (state) => state.state === selectedOption.value
    );
    const districts = selectedState ? selectedState.districts : [];
    setDistrictOptions(
      districts.map((district) => ({ value: district, label: district }))
    );
  };

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      reset();

      //   router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
          <div className="w-full">
            <label className="block text-md font-bold mb-1">Name</label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Name must be a string",
                },
              }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Enter Name"
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* Email and Contact Number */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-md font-bold mb-1">Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Number
            </label>
            <Controller
              name="contactNumber"
              control={control}
              rules={{
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact number must be a 10-digit number",
                },
              }}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.contactNumber && (
              <p className="text-red-600">{errors.contactNumber.message}</p>
            )}
          </div>
        </div>

        {/* Address Line 1 and Address Line 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 1
            </label>
            <Controller
              name="addressLine1"
              control={control}
              rules={{ required: "Address Line 1 is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.addressLine1 && (
              <p className="text-red-600">{errors.addressLine1.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 2
            </label>
            <Controller
              name="addressLine2"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
          </div>
        </div>

        {/* Pincode and City */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <Controller
              name="pincode"
              control={control}
              rules={{
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be a 6-digit number",
                },
              }}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.pincode && (
              <p className="text-red-600">{errors.pincode.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <Controller
              name="city"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full border-gray-300 rounded-md shadow-sm border-black border p-2"
                />
              )}
            />
            {errors.city && (
              <p className="text-red-600">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* State and District */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={states}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                    handleStateChange(selectedOption);
                  }}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
            {errors.state && (
              <p className="text-red-600">{errors.state.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">District</label>
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={districtOptions}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
            {errors.district && (
              <p className="text-red-600">{errors.district.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Order Total</h2>
          <p className="text-lg font-bold">${query.total}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
