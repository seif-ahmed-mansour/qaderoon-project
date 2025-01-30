const DefaultInput = ({
  name,
  onChange,
  required = false,
  value,
  type,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-gray-700 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
        {...rest}
      />
    </>
  );
};

export default DefaultInput;
