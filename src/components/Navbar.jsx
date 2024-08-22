import React, { useState } from "react";
import headerBg from "../assets/headerBg.jpg";
import logo from "../assets/KayPHP.svg";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
      {open && (
        <div className="fixed inset-0 bg-white z-20">
          <div className="flex flex-col gap-8 text-xl font-semibold justify-center items-center mt-20">
            <button>Courses</button>
            <button>Services</button>
            <button>Demos</button>
            <button className="bg-[#FF6700] text-white  px-8 py-2 rounded-md ">
              Contact Us
            </button>
            <button className="border-[#FF6700] border    px-8 py-2 rounded-md ">
              Help Me
            </button>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="absolute top-4 right-4"
          >
            <FaTimes size={25} />
          </button>
        </div>
      )}
      <nav className="flex p-4 font-semibold justify-between bg-[#FF6700] items-center">
        <div>
          <img className=" w-20 relative" alt="ps" src={logo} />
        </div>
        <div className="md:flex hidden gap-6">
          <button>Courses</button>
          <button>Services</button>
          <button>Demos</button>
        </div>
        <div className="md:flex hidden gap-4">
          <button className="bg-[#512609] text-white  px-8 py-2 rounded-md ">
            Contact Us
          </button>
          <button className="border-[#512609] border    px-8 py-2 rounded-md ">
            Help Me
          </button>
        </div>
        <button onClick={() => setOpen(true)} className="flex md:hidden ">
          <FaBars size={25} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
