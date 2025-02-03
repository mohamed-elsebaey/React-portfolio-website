import { useState } from "react";
import { motion } from "framer-motion";
import "./main.css";

const myProject = [
  {
    projectTitle: "Commodity Trading Stats",
    categories: ["python", "plotly", "dash", "data analysis"],
    imgPath: "./images/commodity-trading-stats.PNG",
    liveDemo: "https://commodity-trading-stats.onrender.com",
    github: "https://github.com/mohamed-elsebaey/commodity-trading-stats_Dash",
    subtitle:
      "Interactive dashboard for commodity trading statistics built with Python Plotly Dash",
  },
  {
    projectTitle: "Call Center Dashboard",
    categories: ["python", "plotly", "dash", "data analysis"],
    imgPath: "./images/call-center.PNG",
    liveDemo: "https://call-center-cb5b.onrender.com",
    github: "https://github.com/mohamed-elsebaey/call-center_Dash",
    subtitle: "Interactive call center analytics dashboard built with Python Plotly Dash",
  },
  {
    projectTitle: "Alpha Herb",
    categories: ["next js", "typescript", "tailwind", "e-commerce"],
    imgPath: "./images/alpha-herb.PNG",
    liveDemo: "https://www.alpha-herbs.com/",
    github: "https://github.com/mohamed-elsebaey/alpha-herb",
    subtitle:
      "E-commerce platform for herbal and natural products built with Next.js",
  },
  {
    projectTitle: "Egypt Talent",
    categories: ["next js", "typescript", "tailwind", "landing page", "frontend"],
    imgPath: "./images/egypt-talent.PNG",
    liveDemo: "https://egypt-talent.vercel.app/",
    github: "https://github.com/mohamed-elsebaey/Egypt-Talent",
    subtitle: "A platform for connecting Egyptian talents with opportunities",
  },

  {
    projectTitle: "EVC Rental",
    categories: ["next js", "typescript", "tailwind", "marketplace", "e-commerce"],
    imgPath: "./images/evc-rental.png",
    liveDemo: "https://evc-rental.vercel.app/",
    github: "https://github.com/mohamed-elsebaey/evc-rental",
    subtitle:
      "Professional platform for selling and renting photography and videography equipment",
  },
  {
    projectTitle: "Exams platform",
    categories: ["next js", "typescript", "tailwind", "education"],
    imgPath: "./images/exam-gammal-tech.png",
    liveDemo: "https://exam-gammal-tech.vercel.app/",
    github: "https://github.com/mohamed-elsebaey/exam.gammal.tech",
    subtitle: "Educational platform helping students learn programming with interactive tests",
  },
  {
    projectTitle: "React Portfolio",
    categories: ["react", "vite", "frontend"],
    imgPath: "./images/elsebaey.png",
    liveDemo: "/",
    github: "https://github.com/mohamed-elsebaey/React-portfolio-website",
    subtitle: "Personal portfolio website built with React and Vite",
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
    <main id="projects" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => onActiveHandler("all")}
          className={active === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => onActiveHandler("python")}
          className={active === "python" ? "active" : null}
        >
          Python & Dash
        </button>
        <button
          onClick={() => onActiveHandler("data analysis")}
          className={active === "data analysis" ? "active" : null}
        >
          Data Analytics
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

                  {/* <a className="link flex" href="#">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a> */}
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
