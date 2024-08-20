export default function Filter({ categories, setCategory }) {
  return (
    <div className="space-y-4 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-3">Filter by Category </h2>
      {categories.map((category, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-radio text-blue-500"
          />
          <span>{category}</span>
        </label>
      ))}
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="category"
          value=""
          onChange={() => setCategory("")}
          className="form-radio text-blue-500"
        />
        <span>All Categories</span>
      </label>
    </div>
  );
}
