export default function DropDown({ options, value, onChange }) {
  return (
    <div>
      <select 
        className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}