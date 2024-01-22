import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section-hero">
      <motion.div
        initial={{ scale: 1, top: 0, right: 5 }}
        animate={{
          scale: [1, 0.9, 1.1, 1, 0.9, 1],
          rotate: [0, 12, 24, 36, 48, 60, 72],
          right: [5, 3, 1, -1, -3],
        }}
        transition={{ duration: 20 }}
        className="hero__bg--1"
      ></motion.div>
      <motion.div
        initial={{ scale: 1, bottom: 2, left: 0, rotate: 0 }}
        animate={{
          scale: [1, 1, 1, 1.05, 1.1, 1.1, 1.05],
          rotate: [0, -10, -20, -30, -40, -45, -60, -75, -90, -100, -110, -120],
          bottom: [1, 1, 1, 2, 3, 5, 6, 8, 6, 5, 3],
          left: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        }}
        transition={{ duration: 30 }}
        className="hero__bg--2"
      ></motion.div>
      <h1 className="hero__text--intro">Hi, I'm Andrew.</h1>
      <p className="hero__text--line2">
        A Manchester based<br></br>
        <span
          className="hero__text--job-titles"
          data-wait="2000"
          data-words='["Product Manager", "Product Owner", "Project Manager", "Web Developer"]'
        >
          Product Manager
        </span>
      </p>
    </section>
  );
};

export default Hero;
