import "../styles/Contact.css";
import ContactCard from "./ContactCard";
import linkedin from "/linkedin.svg";
import linkedinHover from "/linkedinHover.svg";
import github from "/github.svg";
import githubHover from "/githubHover.svg";
import { motion } from "framer-motion";

function Contact() {
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
  const fadeAnimationFront2 = {
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
  const fadeInAnimationVariantsH2 = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <section id="contact" className="contactContainer">
      <motion.h2
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="titleContact"
      >
        Me contacter
      </motion.h2>
      <div className="contactDiv">
        <motion.div
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ContactCard
            name="Linkedin"
            classCard="contact"
            classIcon="icon"
            classContent="contact__body"
            text="Suivez-moi !"
            img={linkedin}
            href="https://www.linkedin.com/in/enzo-michel-a6652828a/"
            blank="_blank"
            textContent="Suivez mes aventures et mes expériences sur Linkedin !"
            imgHover={linkedinHover}
          />
        </motion.div>
        <motion.div
          variants={fadeAnimationFront2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ContactCard
            name="GitHub"
            classCard="contact2"
            classIcon="icon2"
            classContent="contact__body2"
            text="Suivez-moi !"
            img={github}
            href="https://github.com/ozen2"
            blank="_blank"
            textContent="Visitez mon GitHub et découvrez la face cachée de mes projets !"
            imgHover={githubHover}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
