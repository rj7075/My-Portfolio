import React from "react";
import html from "../../public/html.png";
import Python from "../../public/python.webp";
import NodeJS from "../../public/node.png";
import ReactJS from "../../public/reactjs.png";
import MongoDB from "../../public/mongodb.jpg";
import Express from "../../public/express.png";
import javascript from "../../public/javascript.png";
import css from "../../public/css.jpg";
function Expirience() {
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
      logo: html,
      name: "HTML",
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
    },
  ];

  return (
    <div
      name="Expirience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10px mb-4"
    >
      <h1 className="text-3xl text-green-600 font-semibold mb-5">Expirience</h1>
      <p className=" font-semibold">
        I have more than 1.5 year of expirience in these technology
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className="flex flex-col items-center justify-center  md:w-[200px] md:h-[200px] border-[2px] shadow-md p-1 rounded-full cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img src={logo} className="w-[120px] rounded-full" alt="" />
            <div className="font-bold">
              <div>{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Expirience;
