import { IoIosArrowDown } from "react-icons/io";

export default function Select({
  title,
  options = [],
  className = "w-24 p-4",
  onChange,
  value,
}) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={`appearance-none border border-gray-300 bg-white ${className}`}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
