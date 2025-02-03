import { useState } from "react";
import { motion } from "framer-motion";
import "./main.css";

const myProject = [
  {
    projectTitle: "Alpha Herb",
    categories: ["next js", "e-commerce", "fullstack"],
    imgPath: "./imges/alpha-herb.PNG",
    liveDemo: "https://www.alpha-herbs.com/",
    github: "https://github.com/mohamed-elsebaey/alpha-herb",
    subtitle:
      "E-commerce platform for herbal and natural products built with Next.js",
  },
  {
    projectTitle: "Egypt Talent",
    categories: ["next js", "typescript", "tailwind", "web app", "frontend"],
    imgPath: "./imges/egypt-talent.PNG",
    liveDemo: "https://egypt-talent.vercel.app/",
    github: "https://github.com/mohamed-elsebaey/Egypt-Talent",
    subtitle: "A platform for connecting Egyptian talents with opportunities",
  },

  {
    projectTitle: "EVC Rental",
    categories: ["next js", "marketplace", "frontend"],
    imgPath: "./imges/evc-rental.png",
    liveDemo: "https://evc-rental.vercel.app/",
    github: "https://github.com/mohamed-elsebaey/evc-rental",
    subtitle:
      "Professional platform for selling and renting photography and videography equipment",
  },
];
const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProject);

  const onActiveHandler = (category) => {
    setActive(category);
    setArr(
      category === "all"
        ? myProject
        : myProject.filter((item) => item.categories.includes(category))
    );
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => onActiveHandler("all")}
          className={active === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => onActiveHandler("next js")}
          className={active === "next js" ? "active" : null}
        >
          Next Js
        </button>
        <button
          onClick={() => onActiveHandler("react")}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => onActiveHandler("fullstack")}
          className={active === "fullstack" ? "active" : null}
        >
          Fullstack
        </button>
        <button
          onClick={() => onActiveHandler("e-commerce")}
          className={active === "e-commerce" ? "active" : null}
        >
          E-commerce
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <motion.article
              key={item.imgPath}
              className=" card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.subtitle}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a
                      href={item.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Live Demo"
                    ></a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-github"
                      title="Github"
                    ></a>
                  </div>

                  <a className="link flex" href="#">
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
