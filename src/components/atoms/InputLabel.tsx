type InputLabelProps = {
  label: string;
  type: "email" | "text";
  placeholder?: string;
  className?: string;
};

const InputLabel = ({
  label,
  type,
  placeholder,
  className,
}: InputLabelProps) => {
  return (
    <div className={`w-full flex flex-col gap-4 text-left ${className}`}>
      <label htmlFor={label} className="text-type-m font-bold text-basic-900">
        {label} <span className="text-primary">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-[19px] px-5 rounded-lg border-[1.5px] border-basic-900 text-type-l font-bold text-basic-900 focus:outline-primary placeholder-basic-500 placeholder:font-medium"
      />
    </div>
  );
};

export default InputLabel;
