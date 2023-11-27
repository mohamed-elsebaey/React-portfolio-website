import { useState } from "react";
import { motion } from "framer-motion";
import "./main.css";

const myProject = [
  {
    projectTitle: "react Project",
    category: "react",
    imgPath: "./imges/1.jpg",
  },
  {
    projectTitle: "HTML & css Project",
    category: "css",
    imgPath: "./imges/2.jpg",
  },

  { projectTitle: "java Project", category: "java", imgPath: "./imges/3.jpg" },
  {
    projectTitle: "Next.js Project",
    category: "next",
    imgPath: "./imges/4.jpg",
  },
];
const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProject);

  const onActiveHandler = (category) => {
    setActive(() => category);
    setArr(
      category === "all"
        ? myProject
        : myProject.filter((item) => item.category === category)
    );
  };

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => onActiveHandler("all")}
          className={active === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => onActiveHandler("css")}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => onActiveHandler("java")}
          className={active === "java" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => onActiveHandler("react")}
          className={active === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => onActiveHandler("next")}
          className={active === "next" ? "active" : null}
        >
          Next Js
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <motion.article
              key={item.imgPath}
              className=" card"
              initial={{scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">Some Data about the Project.</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
