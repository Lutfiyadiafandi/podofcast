type InputTextAreaProps = {
  label: string;
  placeholder?: string;
  className?: string;
};

const InputTextArea = ({
  label,
  placeholder,
  className,
}: InputTextAreaProps) => {
  return (
    <div className={`flex flex-col gap-4 text-left ${className}`}>
      <label
        htmlFor={label}
        className="text-type-m font-bold text-basic-900 capitalize"
      >
        {label} <span className="text-primary">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows={5}
        className="w-full p-5 rounded-lg border-[1.5px] border-basic-900 text-type-l font-bold text-basic-900 focus:outline-primary placeholder-basic-500 placeholder:font-medium"
      ></textarea>
    </div>
  );
};

export default InputTextArea;
