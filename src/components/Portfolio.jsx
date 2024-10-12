import React from "react";
import Java from "../../public/java.png";
import Python from "../../public/python.webp";
import NodeJS from "../../public/node.png";
import ReactJS from "../../public/reactjs.png";
import MongoDB from "../../public/mongodb.jpg";
import Express from "../../public/express.png";
import javascript from "../../public/javascript.png";
import spring from "../../public/spring.png";
function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: MongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: Express,
      name: "Express",
    },
    {
      id: 3,
      logo: ReactJS,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: NodeJS,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: Python,
      name: "Python",
    },
    {
      id: 6,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: Java,
      name: "Java",
    },
    {
      id: 6,
      logo: spring,
      name: "SpringBoot",
    },
  ];

  return (
    <div 
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10px">
      <h1 className="text-3xl text-green-600 font-semibold mb-5">PortFolio</h1>
      <span className="underline font-semibold">Frontend Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
              <p className="px-2 text-gray-700">
                Ranjeet Yadav Software Developer ,Web developer,Athato Ghumakked
                Jigyasu.
              </p>
            </div>
            <div className=" px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Video
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                Source code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
