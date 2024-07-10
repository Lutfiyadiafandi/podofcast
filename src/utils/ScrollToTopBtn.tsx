import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
        setShowTopBtn(false);
      } else {
        setShowTopBtn(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <FaArrowAltCircleUp
          className="fixed bottom-[40px] right-[40px] text-primary border-2 border-gray-300 rounded-full w-[40px] h-[40px] cursor-pointer bg-basic-100 z-30"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
