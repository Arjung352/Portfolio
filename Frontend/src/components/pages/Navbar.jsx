import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between backdrop-blur-2xl">
          <div className="flex">
            <img src="./src/components/ui/image.png" className=" h-16 w-28 " />
          </div>
          <ul className="text-white flex text-2xl font-medium font-work items-center gap-10">
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
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
