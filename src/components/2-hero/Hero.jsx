import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = {
    // twitter: "https://twitter.com/yourusername",
    // instagram: "https://instagram.com/yourusername",
    // facebook: "https://www.facebook.com/mohamed.elsebaey.129",
    github: "https://github.com/mohamed-elsebaey",
    linkedin: "https://www.linkedin.com/in/mohamed-elsebaey",
  };

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 1 }}
            src="./me.png"
            className="avatar"
            alt="Mohamed Elsebaey"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Developer.
        </motion.h1>

        <motion.p
          className="sub-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I&apos;m a software developer specializing in modern web applications using
          Next.js, TypeScript, and Tailwind CSS. I also build data-driven
          solutions with Python and Dash Plotly, focusing on performance,
          efficiency, and elegant user experiences.
        </motion.p>
        <div className="all-icons flex">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`icon icon-${platform}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="right-section animation"
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ duration: 1 }}
      >
        <Lottie
          className="developerAnimation"
          animationData={developerAnimation}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
