const SelectInput = ({
  name,
  onChange,
  required = false,
  value,
  options,
  defaultValue = "",
  ...rest
}) => {
  return (
    <>
      <div className="relative z-20">
        <select
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          required={required}
          {...rest}
          className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-[10px] px-5 text-gray-700 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2">
          <option value="">{defaultValue}</option>
          {options.map((author) => (
            <option
              key={author._id}
              value={author._id}>
              {author.name}
            </option>
          ))}
        </select>
        <span className="absolute left-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
      </div>
    </>
  );
};

export default SelectInput;
