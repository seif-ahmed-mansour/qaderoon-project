import { FaRegEdit } from "react-icons/fa";

const Textarea = ({ name, onChange, required = false, value, ...rest }) => {
  return (
    <>
      <div className="relative flex">
        {value?.length == 0 && (
          <span className="absolute top-[18px] left-4">
            <FaRegEdit size={20} />
          </span>
        )}
        <textarea
          type="text"
          rows="6"
          className="w-full bg-transparent rounded-md border border-stroke p-3 pl-12 text-gray-700 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          required={required}
          {...rest}
        />
      </div>
    </>
  );
};

export default Textarea;
