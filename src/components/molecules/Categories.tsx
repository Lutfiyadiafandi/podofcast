// type props = {
//   category: string[];
//   className?: string;
// };

// const Categories = ({ category, className }: props) => {
//   return (
//     <div className={`w-full ${className}`}>
//       <div
//         className={`pb-5 overflow-x-auto flex justify-between items-center border-b-[1.5px] border-basic-500 space-x-4`}
//       >
//         {category.map((item: any, index) => (
//           <button
//             key={index}
//             className="py-2 px-4 text-type-xl font-medium text-basic-500 hover:text-primary text-center capitalize whitespace-nowrap"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
import React, { useState } from "react";

type Props = {
  category: string[];
  className?: string;
};

const Categories: React.FC<Props> = ({ category, className }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    category[0]
  );

  const handleCategoryClick = (item: string) => {
    setActiveCategory(item === activeCategory ? null : item);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="pb-5 overflow-x-auto flex justify-between items-center border-b-[1.5px] border-basic-500 space-x-4">
        {category.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(item)}
            className={`py-2 px-4 text-type-xl hover:text-primary text-center capitalize whitespace-nowrap ${
              activeCategory === item
                ? "text-primary font-bold"
                : "text-basic-500 font-medium"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
