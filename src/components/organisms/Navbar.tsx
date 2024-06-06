import Logo from "../../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between py-10">
      <div>
        <img src={Logo} alt="" className="w-[143px]" />
      </div>
      <nav className="text-type-xl leading-[64%] text-basic-400 font-medium">
        <ul className="flex gap-11">
          <li className="active ">Home</li>
          <li className="">About Us</li>
          <li className="">Package</li>
          <li className="">Facilities</li>
          <li className="">Gallery</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
