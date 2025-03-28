import { NavLink } from "react-router-dom";

interface mobileNavProps {
  openNav: Boolean;
  setOpenNav: Function;
}

const MobileNav: React.FC<mobileNavProps> = ({ openNav, setOpenNav }) => {
  return (
    <nav
      className={`mobile-nav h-screen w-[70vw] flex flex-col justify-start gap-10 py-32 fixed right-0 top-0 sm:hidden ${
        openNav ? "open-nav" : "close-nav"
      }`}
    >
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/"
        className="px-6 w-full mobile-links"
      >
        <span className="font-bold">00</span> HOME
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/destination"
        className="px-6 w-full mobile-links"
      >
        <span className="font-bold">01</span> DESTINATION
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/crew"
        className="px-6 w-full mobile-links"
      >
        <span className="font-bold">02</span> CREW
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/technologies"
        className="px-6 w-full mobile-links"
      >
        <span className="font-bold">03</span> TECHNOLOGY
      </NavLink>
    </nav>
  );
};

export default MobileNav;
