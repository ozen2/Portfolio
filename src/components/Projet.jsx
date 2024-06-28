import "../styles/Projet.css";
import { motion } from "framer-motion";
import wildeat from "/wildEat.png";
import nebula from "/Nebula.png";
import rando from "/rando.png";
import externatic from "/externatic.png";
import ProjetAlone from "./ProjetAlone";

function Projet() {
  const fadeInAnimationVariantsH2 = {
    initial: {
      opacity: 0,
      y: 50,
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
    <section className="projects">
      <motion.h2
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="projects"
        className="projectTitle"
      >
        Mes Projets
      </motion.h2>
      <motion.div
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="motionDiv"
      >
        <ProjetAlone
          title="Wild Eat - P1"
          image={wildeat}
          description="Premier projet de la formation réalisé en équipe de 5 dévelppeurs. Le but était de faire un site reprenant le même concept que Uber-Eats, ce qui explique le nom Wild-Eat. Le projet est en HTML/CSS/JS sans pages ni données dynamique. Le site contient des petites fonctions de bases tel qu'une barre de recherche et des filtres."
          link="Découvrir le projet en ligne"
          linkExtern="/"
          target="_blank"
        />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="motionDiv"
      >
        <ProjetAlone
          title="Nebula - P2"
          image={nebula}
          description="Second projet de la formation réalisé cette fois-ci en équipe de 4 dévelppeurs. L'objectif était de faire un site de réservation de voyages interplanétaires. Pour cela nous avons utilisé l'API du célèbre jeux-vidéo Star Citizen (qui est désormais HS, donc répercussion sur le projet). Le projet est en REACT/SCSS avec pages et données dynamiques. Le site contient des fonctions de bases tel qu'une barre de recherche, des filtres ainsi qu'un système de réservation."
          link="Découvrir le projet en ligne"
          linkExtern="https://nebula-self-five.vercel.app/"
          target="_blank"
        />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="motionDiv"
      >
        <ProjetAlone
          title="RandoZen - Protojam"
          image={rando}
          description="Troisième projet de la formation réalisé en équipe de 3 dévelppeurs et 2 data analyste. Le but était de faire un site seulement mobile (non responsive) sur le thème nature et déconnexion. Il répertorie tous les parcours de randonnée de la gironde. Le projet est en REACT/CSS avec pages et données dynamiques. Le site contient des fonctionnalités tel qu'une barre de recherche, des filtres, mode photo..."
          link="Découvrir le projet en ligne"
          linkExtern="https://randozen.vercel.app/"
          target="_blank"
        />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariantsH2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="motionDiv"
      >
        <ProjetAlone
          title="Externatic - P3"
          image={externatic}
          description="Dernier projet (en cours) de la formation réalisé en équipe de 4 dévelppeurs. Le but est de refaire le site de l'entrprise Externatic dont le concept est de mettre en relation les entrprises et les candidats via un consultant. Le projet est en REACT/TailwindCSS/SQL avec pages et données dynamiques ainsi que base de données. Le site contient fonctionnalité tel qu'une barre de recherche, des filtres, inscription, connexion, rôle admin, consultant et candidats..."
          link="Découvrir le projet en ligne"
          linkExtern="https://0224-js-externatic.bordeaux-jlg.wilders.dev/"
          target="_blank"
        />
      </motion.div>
    </section>
  );
}

export default Projet;
