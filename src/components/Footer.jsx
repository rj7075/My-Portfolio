import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaGithub size={24} />
              <FaLinkedinIn href="" size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p>&copy; 2024 Ranjeet Yadav.All right reserved</p>
              <p className="items-center text-sm">
                Looking for job opportunity
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
