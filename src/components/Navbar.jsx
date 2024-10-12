import React, { useState } from "react";
import pic from "../../public/Ranjeet CDS1.jpg";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Expirience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center  h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="usericon" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Ranjeet_Yadav<span className="text-green-500 text-2xl">I</span>
              <p className="text-sm">Software Developer</p>
            </h1>
          </div>
          {/* Desktop navbar */}
          <div className="">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    acttiveclass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMenuSharp size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>
        {/* mobile responsive  navbar */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center cursor-pointer justify-center text-xl space-y-3">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    acttiveclass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
