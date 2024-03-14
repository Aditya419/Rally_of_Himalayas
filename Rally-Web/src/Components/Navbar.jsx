import React from "react";
import { MdCall } from "react-icons/md";
import {
  FaBarsStaggered,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      {/* ----- mobile navbar ----- */}
      <div className="md:hidden">
        <div className="h-14 bg-orange-500 flex justify-between items-center p-5 text-white ">
          <FaBarsStaggered />
          <div className="flex gap-4">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* ----- desktop navbar ---- */}
      <div className="hidden md:flex justify-center">
        <div className="h-[70px] text-xl bg-orange-500 flex justify-between items-center p-5 text-white md:w-[1100px]">
          <div className="flex gap-5 text-xl font-semibold">
            <div>Home</div>
            <div>About Us</div>
            <div>Events</div>
            <div>News</div>
            <div>Gallery</div>
            <div>Contact Us</div>
          </div>
          <div className="flex gap-4">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
