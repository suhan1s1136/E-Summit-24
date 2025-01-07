"use client";
// Import React and styles
import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-1/3 sm:w-1/2 md:w-full mx-auto ">
    <motion.section
    style={{ marginTop: "40px" }}
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className={` ${styles.section} `}
      id={"about"}
    >
      <div className={styles.card}>
        <div className={styles.cardContent}>
        <h3 className={"m-0 text-primary font-bold "} style={{ fontSize: "2.5rem" }}>
  ABOUT E-SUMMIT&apos;25
</h3>

          <h1 className={"m-0 text-secondary break-words"}>
            E-Summit is an electrifying celebration of innovation and
            entrepreneurship, brought to you by the Entrepreneurship Cell (
            E-Cell ) of Indian Institute of Technology ( IIT ) BHU.
          </h1>
          <p className={"m-0 text-secondary breaks-words"}>
           This isn't just your regular annual festival. Here dreams are nurtured, ideas are cultivated
            and future entrepreneurs are born.
          <br /> E-Summit is the convergence of visionary thinkers, budding
            entrepreneurs and established industry leaders, all united by a
            common passion- &quot;The drive to create, innovate and transform
            the future.&ldquo;
            <br /> Join us in this exhilarating journey of entrepreneurship and together, let's write the future!
          </p>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default About;
