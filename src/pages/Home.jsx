import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import Lottie from "lottie-react";
import scrollAnimation from "../../public/assets/Animation-17164068701489.json";
import "../styles/Home.css";
import Bandeau from "../components/Bandeau";
import HardSkills from "../components/HardSkills";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Projet from "../components/Projet";
import Contact from "../components/Contact";

function Home() {
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
  const fadeInAnimationVariantsH3 = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
      },
    },
  };
  const fadeInAnimationVariantsH4 = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
      },
    },
  };
  const fadeInAnimationVariantsH5 = {
    initial: {
      opacity: 0,
      y: -80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const text = document.querySelector(".sec-text");
    const textFS = document.querySelector(".descFullStack");

    const textLoad = () => {
      if (text) {
        setTimeout(() => {
          text.textContent = "Développeur";
          text.classList.remove("designFont");
        }, 0);
        setTimeout(() => {
          text.textContent = "Designer";
          text.classList.add("designFont");
        }, 5000);
        if (textFS)
          setTimeout(() => {
            textFS.textContent = "Full-Stack";
          }, 0);
        setTimeout(() => {
          textFS.textContent = "";
        }, 5000);
      }
    };

    const intervalId = setInterval(textLoad, 10000);
    textLoad();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <motion.div style={{ scaleX }} className="progress-bar" />
      <NavBar />
      <section className="intro">
        <article className="introText">
          <h1 className="introPres">Salut ! Moi c'est Enzo.</h1>
          <div className="containerIntro">
            <span className="text first-text">Un </span>
            <span className="text sec-text"></span>
            <h3 className="descFullStack"></h3>
          </div>
          <motion.p
            variants={fadeInAnimationVariantsH2}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="info"
          >
            Basé sur Bordeaux, je suis un jeune développeur en quête
            d'expérience et de challenge.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariantsH3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="discoverMe"
            href=""
          >
            Découvrez mon univers
          </motion.p>
          <motion.div
            variants={fadeInAnimationVariantsH4}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Lottie className="lottie" animationData={scrollAnimation} />
          </motion.div>
        </article>
      </section>
      <main>
        <Bandeau />
        <About />
        <HardSkills />
        <Projet />
        <Contact />
        <motion.div
          variants={fadeInAnimationVariantsH2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="secDown"
        >
          <a className="downloadCv" href="/newCV.pdf" download="CV Enzo Michel">
            <p className="texta">Téléchargez mon CV !</p>
          </a>
        </motion.div>
      </main>
    </>
  );
}
export default Home;
