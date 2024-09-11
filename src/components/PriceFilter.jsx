import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceFilter = ({ onFilter }) => {
  const [values, setValues] = useState([7, 1000]);

  const handleChange = (values) => {
    setValues(values);
    onFilter({
      minPrice: parseFloat(values[0]),
      maxPrice: parseFloat(values[1]),
    });
  };

  return (
    <div className="p-4  ">
      <h2 className="text-lg font-bold mb-3">Filter by Price</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Price Range:</label>
        <div className="flex justify-between mb-2 text-sm">
          <span>${values[0]}</span>
          <span>${values[1]}</span>
        </div>
        <Range
          step={10}
          min={7}
          max={1000}
          values={values}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-2 rounded-md"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#CCCC", "#0D9488", "#CCCC"],
                  min: 7,
                  max: 1000,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-[#0D9488] rounded-full shadow"
            />
          )}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
