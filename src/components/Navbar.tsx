import { NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="text-grey flex justify-between py-2">
        <div className="flex gap-5 items-center">
          <NavLink
            to="/"
            className="text-lightblack text-3xl font-bold cursor-pointer"
          >
            Shortly
          </NavLink>
          <div className=" gap-2 font-semibold hidden">
            <a href="" className="hover:text-lightblack">
              Features
            </a>
            <a href="" className="hover:text-lightblack">
              Pricing
            </a>
            <a href="" className="hover:text-lightblack">
              Resources
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="font-semibold" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-cyen text-customWhite px-4 py-2 rounded-3xl hover:bg-[#9AE3E3]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
