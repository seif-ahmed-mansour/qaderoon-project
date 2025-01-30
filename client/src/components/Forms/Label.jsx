const Label = ({ label, ...rest }) => {
  return (
    <label
      className="mb-[10px] block text-base font-semibold text-gray-700"
      {...rest}>
      {label}
    </label>
  );
};

export default Label;
