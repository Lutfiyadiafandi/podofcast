import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      console.log({ lastScrollTop });
      console.log({ currentScrollTop });

      if (currentScrollTop <= 700) {
        setShowTopBtn(false);
      } else if (currentScrollTop > lastScrollTop && currentScrollTop > 700) {
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
          className="fixed bottom-[30px] right-[30px] md:bottom-[40px] md:right-[40px] text-primary rounded-full w-[40px] h-[40px] cursor-pointer bg-basic-100 z-30"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
