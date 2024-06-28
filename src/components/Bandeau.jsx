import "../styles/Bandeau.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};
function ParallaxText({ children, baseVelocity = 5 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 500], [0, 1], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
function Bandeau() {
  return (
    <section id="soft" className="bandeau">
      <ParallaxText baseVelocity={-0.3}>
        <article className="articleBandeau1">
          <h2 className="développeurDev2">SOFTSKILLS</h2>
          <h2 className="développeurDev">SOFTSKILLS</h2>
          <h2 className="développeurDev2">SOFTSKILLS</h2>
          <h2 className="développeurDev">SOFTSKILLS</h2>
          <h2 className="développeurDev2">SOFTSKILLS</h2>
          <h2 className="développeurDev">SOFTSKILLS</h2>
          <h2 className="développeurDev2">SOFTSKILLS</h2>
          <h2 className="développeurDev">SOFTSKILLS</h2>
          <h2 className="développeurDev2">SOFTSKILLS</h2>
        </article>
      </ParallaxText>
      <ParallaxText baseVelocity={0.3}>
        <article className="articleBandeau1">
          <h2 className="développeurDev2">CRÉATIF</h2>
          <h2 className="développeurDev">CRÉATIF</h2>
          <h2 className="développeurDev2">CRÉATIF</h2>
          <h2 className="développeurDev">CRÉATIF</h2>
          <h2 className="développeurDev2">CRÉATIF</h2>
          <h2 className="développeurDev">CRÉATIF</h2>
          <h2 className="développeurDev2">CRÉATIF</h2>
          <h2 className="développeurDev">CRÉATIF</h2>
          <h2 className="développeurDev2">CRÉATIF</h2>
        </article>
      </ParallaxText>
      <ParallaxText baseVelocity={-0.3}>
        <article className="articleBandeau1">
          <h2 className="développeurDev2">PASSIONNÉ</h2>
          <h2 className="développeurDev">PASSIONNÉ</h2>
          <h2 className="développeurDev2">PASSIONNÉ</h2>
          <h2 className="développeurDev">PASSIONNÉ</h2>
          <h2 className="développeurDev2">PASSIONNÉ</h2>
          <h2 className="développeurDev">PASSIONNÉ</h2>
          <h2 className="développeurDev2">PASSIONNÉ</h2>
          <h2 className="développeurDev">PASSIONNÉ</h2>
          <h2 className="développeurDev2">PASSIONNÉ</h2>
        </article>
      </ParallaxText>
      <ParallaxText baseVelocity={0.3}>
        <article className="articleBandeau1">
          <h2 className="développeurDev2">CURIEUX</h2>
          <h2 className="développeurDev">CURIEUX</h2>
          <h2 className="développeurDev2">CURIEUX</h2>
          <h2 className="développeurDev">CURIEUX</h2>
          <h2 className="développeurDev2">CURIEUX</h2>
          <h2 className="développeurDev">CURIEUX</h2>
          <h2 className="développeurDev2">CURIEUX</h2>
          <h2 className="développeurDev">CURIEUX</h2>
          <h2 className="développeurDev2">CURIEUX</h2>
        </article>
      </ParallaxText>
      <ParallaxText baseVelocity={-0.3}>
        <article className="articleBandeau1">
          <h2 className="développeurDev2">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev2">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev2">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev">ADAPTIBILITÉ</h2>
          <h2 className="développeurDev2">ADAPTIBILITÉ</h2>
        </article>
      </ParallaxText>
    </section>
  );
}

export default Bandeau;
