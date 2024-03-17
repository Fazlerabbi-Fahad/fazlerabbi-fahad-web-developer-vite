import { motion } from "framer-motion";
import Banner from "../../../component/ui/Banner/Banner";
import About from "../../../component/ui/About/About";
import Portfolio from "../../../component/ui/Portfolio/Portfolio";
import Skills from "../../../component/ui/Skills/Skills";
import Contact from "../../../component/ui/Contact/Contact";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto">
      <motion.div
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Banner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <About />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
