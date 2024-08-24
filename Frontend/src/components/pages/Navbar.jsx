import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="backdrop-blur-2xl">
        <div className="flex p-4 max-md:p-1">
          <div className="flex w-full justify-between items-center">
            <img src="./images/logo.png" className="h-16 w-28" alt="Logo" />
            <ul className="text-white flex text-2xl max-md:hidden font-medium font-work items-center gap-10">
              <li>
                <NavLink
                  to="/"
                  className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
                >
                  <HomeIcon className="text-white" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
                >
                  <PersonIcon className="text-white" />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
                >
                  <LayersIcon className="text-white" />
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="gap-2 mr-6 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
                >
                  <PhoneIcon className="text-white" />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex">
            {isMenuOpen === true ? (
              <button onClick={toggleMenu}>
                <CloseIcon className="text-white" />
              </button>
            ) : (
              <button onClick={toggleMenu} className="text-white">
                <MenuIcon />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay Menu with Transition */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/60 text-white z-30 flex flex-col items-center py-4 md:hidden  transform ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="text-white text-xl flex flex-col justify-center items-center font-medium font-work space-y-4">
          <li>
            <NavLink
              to="/"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <HomeIcon className="text-white" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <PersonIcon className="text-white" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className="gap-2 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <LayersIcon className="text-white" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="gap-2  flex items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white"
              onClick={toggleMenu}
            >
              <PhoneIcon className="text-white" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
