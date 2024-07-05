type TagProps = {
  text: string;
  className?: string;
};

const Tag = ({ text, className }: TagProps) => {
  return (
    <div
      className={`py-1.5 px-3 border border-basic-500 rounded text-type-s font-medium text-basic-500 lowercase ${className}`}
    >
      {text}
    </div>
  );
};
export default Tag;
