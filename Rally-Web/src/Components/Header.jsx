import React from "react";
import { MdAccessTime, MdCall, MdOutlineEmail } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-evenly ">
        <img
          className="h-14 md:h-16 w-36 md:w-40 my-2 md:my-3 "
          src="https://chambamotorsport.com/wp-content/uploads/2023/05/Final-csc-logo3.png"
          alt=""
        />

        <div className="lg:flex gap-10 hidden">
          <div className="flex items-center gap-1 ">
            <div className="text-orange-500">
              <MdCall />
            </div>
            <div>1234567890</div>
          </div>
          <div className="flex items-center gap-1 ">
            <div className="text-orange-500">
              <MdOutlineEmail />{" "}
            </div>
            <div>aryaknigga@gmail.com</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-orange-500">
              <MdAccessTime />
            </div>
            <div>8:00 am - 10:00 pm</div>
          </div>
        </div>
      </div>

      {/* <div className="h-24 bg-slate-400 flex items-center justify-center ">
        <div className="">
          <img
            className="h-20 "
            src="https://chambamotorsport.com/wp-content/uploads/2023/05/Final-csc-logo3.png"
            alt=""
          />
        </div>
        <div className="flex gap-10">
          <div className="flex items-center">
            <div>
              <MdCall />
            </div>
            <div>1234567890</div>
          </div>
          <div className="flex items-center">
            <div>
              <MdCall />
            </div>
            <div>1234567890</div>
          </div>
          <div className="flex items-center">
            <div>
              <MdCall />
            </div>
            <div>1234567890</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
