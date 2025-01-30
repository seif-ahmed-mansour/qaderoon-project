import { FiUpload } from "react-icons/fi";

const AttachmentsFileInput = ({
  name,
  onChange,
  required = false,
  ...rest
}) => {
  return (
    <>
      <div className="relative font-semibold">
        <label
          htmlFor={name}
          className="flex min-h-[175px] w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed p-6">
          <div>
            <input
              type="file"
              name={name}
              id={name}
              onChange={onChange}
              className="sr-only"
              required={required}
              {...rest}
            />
            <span className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke bg-white dark:bg-dark-2">
              <FiUpload />
            </span>
            <span className="text-base text-body-color dark:text-gray-700">
              Drag &amp; drop or &nbsp;
              <span className="text-primary underline"> browse </span>
            </span>
          </div>
        </label>
      </div>
    </>
  );
};

export default AttachmentsFileInput;
