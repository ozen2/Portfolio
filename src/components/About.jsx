import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
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
    <section id="about" className="about">
      <motion.h2
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="aboutTitle"
      >
        Qui suis-je ?
      </motion.h2>
      <article className="firstParagraphe">
        <motion.h3
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="firstParaTitle"
        >
          Un Développeur Full-Stack
        </motion.h3>
        <motion.p
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="firstParaContent"
        >
          Je suis un développeur full-stack passionné, toujours à la recherche
          de nouveaux défis et d'opportunités d'apprentissage. Mon objectif est
          de progresser chaque jour, en perfectionnant mes compétences et en
          explorant de nouvelles technologies. Enthousiaste et motivé, je suis
          prêt à contribuer à des projets stimulants et à m'investir pleinement
          dans des environnements dynamiques.
        </motion.p>
      </article>
      <article className="secondParagraphe">
        <motion.h3
          variants={fadeAnimationFront2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="secondParaTitle"
        >
          Un Jeune Passionné
        </motion.h3>
        <motion.p
          variants={fadeAnimationFront2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="secondParaContent"
        >
          Je suis un jeune développeur animé par le travail en équipe. J'ai le
          sens des priorités et un esprit collaboratif, ce qui me permet de
          m'adapter facilement et d'apprendre rapidement. Avant de devenir
          développeur, j'ai exploré de nombreux logiciels par curiosité, ce qui
          m'a doté d'un arsenal de compétences diversifiées. Je suis toujours
          prêt à relever de nouveaux défis et à apporter ma contribution à des
          projets stimulants.
        </motion.p>
      </article>
      <article className="thirdParagraphe">
        <motion.h3
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="thirdParaTitle"
        >
          Un Talent Multidisciplinaire
        </motion.h3>
        <motion.p
          variants={fadeAnimationFront}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="thirdParaContent"
        >
          Étant curieux de nature, durant mes années de lycée j'ai découvert des
          disciplines tournant autour du digital. Je suis donc tombé en premier
          dans le monde de la 3D, j'ai appris et réalisé quelques créations en
          3D en me formant sur youtube. Par la suite j'ai découvert le graphisme
          et le web design avec la création de logo, d'illustration et de
          maquettes, ce qui m'a mené après le lycée à démarrer une formation en
          alternance de graphiste / web designer. N'ayant pas trouvé de patron
          je n'ai pas pu continuer cette formation. C'est donc ainsi que j'ai
          découvert le métier de dévelooppeur web dont je suis tombé amoureux.
          Désormais j'utilise toutes ces compétences que j'ai pu acquérir comme
          une force dans le domaine de développement web.
        </motion.p>
      </article>
    </section>
  );
}

export default About;
