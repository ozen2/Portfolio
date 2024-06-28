import { motion } from "framer-motion";
import ButtonHardFront from "./ButtonHardFront";
import ButtonHardBack from "./ButtonHardBack";
import logoReact from "/logoReact.svg";
import logoJS from "/logoJs.svg";
import logoHtml from "/logoHtml.svg";
import logoCss from "/logoCss.svg";
import logoNode from "/logoNode.svg";
import mysql from "/mysql-3 1.svg";
import express from "/express.svg";
import tailwind from "/tailwind.svg";
import "../styles/HardSkills.css";

function HardSkills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const fadeInAnimationVariantsH2 = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const fadeAnimationFront = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const fadeAnimationBack = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <motion.h2
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="titleHard"
      >
        Mes HardSkills
      </motion.h2>
      <section id="hard" className="hardSkills">
        <motion.section
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="frontEnd"
        >
          <h2 className="titleFront">Front End</h2>
          <ul className="buttonContainer">
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardFront imgButton={logoReact} textButton="React JS" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardFront imgButton={logoJS} textButton="JavaScript" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardFront imgButton={logoHtml} textButton="HTML" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardFront imgButton={logoCss} textButton="CSS" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardFront imgButton={tailwind} textButton="Tailwind" />
            </motion.li>
          </ul>
        </motion.section>
        <motion.section
          variants={fadeAnimationBack}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="backEnd"
        >
          <h2 className="titleBack">Back End</h2>
          <ul className="buttonContainer">
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardBack imgButton={logoNode} textButton="NodeJs" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardBack imgButton={mysql} textButton="MySQL" />
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ButtonHardBack imgButton={express} textButton="ExpresJs" />
            </motion.li>
          </ul>
        </motion.section>
      </section>
    </>
  );
}

export default HardSkills;
