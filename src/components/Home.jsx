import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { ReactTyped, Typed } from "react-typed";
import { IoLogoGithub } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-10 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-3 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold text-4xl">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold text-3xl"
                strings={[
                  "Web Developer",
                  "Software Developer",
                  "Problem Solver",
                ]}
                typeSpeed={40}
                backspeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, Myself Ranjeet Yadav I am 2024 B.tech graduated with
              specilization in information technology. I have excelent
              communication skills,My Technical skills in Programming langauge
              C/C++,fundamental of Python, Object oriented programming,Data
              Structure and Algorithm. I have worked on frontend technology like
              Javascript,React,Tailwind css,React Redux toolkit, CSS,HTML and
              backend technology Node js,express js ,mongoDb, Databases Mysql,
              sql,nosql etc. currently I am looking software developer and Web
              developer role as frotend and backend development.
            </p>
            <br />
            {/* Social media */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://github.com/rj7075?page=1&tab=repositories"
                      target="_blank"
                    >
                      <IoLogoGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
                      target="_blank"
                    >
                      <IoLogoLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank">
                      <FaSquareXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/user/ranjeet9899yadav/"
                      target="_blank"
                    >
                      <SiGeeksforgeeks className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently Working on</h1>
                <div className="flex space-x-2">
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                  <RiNodejsLine className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                  <IoLogoReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-20 order-1">
            <img
              src="../../public/Ranjeet CDS1.jpg"
              className=" rounded-full md:w-[450px] md:h-[450px]"
              alt="Ranjeet Yadav"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
