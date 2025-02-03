import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex ">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 1 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Software Developer.</h1>
        <p className="sub-title">
          I’m Mohamed Elsebaey, a Software developer.......
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
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
