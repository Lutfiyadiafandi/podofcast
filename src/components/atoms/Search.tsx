import { CiSearch } from "react-icons/ci";

type props = {
  className?: string;
};

const Search = ({ className }: props) => {
  return (
    <div className={`relative max-w-[570px] ${className}`}>
      <input
        className={`w-full flex gap-6 items-center py-6 pl-[88px] pr-10 rounded-2xl border-[1.5px] border-basic-900 text-type-l font-bold text-basic-900 focus:outline-none placeholder-basic-500 placeholder:font-medium shadow-boxblue`}
        placeholder="Search..."
      />
      <CiSearch
        className="absolute top-1/2 transform -translate-y-1/2 left-10"
        size={24}
      />
    </div>
  );
};

export default Search;
