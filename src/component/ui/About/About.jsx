import { motion } from "framer-motion";
import GradientButton from "../../shared/GradientButton";
import SecondButton from "../../shared/SecondButton";

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div id="about" className="bg-[#171a1e] p-5 lg:p-20 rounded-lg">
        <div>
          <h1 className="font-semibold text-white text-lg md:text-2xl">
            About
          </h1>
          <div className="flex justify-start ml-0 lg:ml-20">
            <div
              className="w-[150px] h-[2px] mt-6 pr-10"
              style={{ backgroundColor: "#750310" }}
            ></div>
            <p className="text-justify mt-4 ml-2 pb-5 lg:pb-10 text-xs md:text-sm font-medium">
              I&apos;m Fazle Rabbi Fahad, a passionate full-stack web developer
              with a strong foundation in both{" "}
              <span className="text-secondary font-bold">
                front-end and back-end development.
              </span>{" "}
              I recently graduated with a Bachelor of Science in Computer
              Science and Engineering from American International
              University-Bangladesh.
              <br />
              <br /> I&apos;m driven by the challenge of creating beautiful,
              user-friendly, and interactive web applications. I possess a
              diverse skillset, including proficiency in: <br />
              <br />
              <span className="text-secondary mr-1 font-bold">
                Front-End Development:
              </span>
              HTML, CSS, Bootstrap, Tailwind CSS, Material UI, JavaScript
              <br />
              <span className="text-secondary  mr-1 font-bold">
                JavaScript Frameworks:
              </span>
              React JS, Next JS
              <br />
              <span className="text-secondary  mr-1 font-bold">
                State Management:
              </span>
              Redux
              <br />
              <span className="text-secondary  mr-1 font-bold">
                Version Control:
              </span>
              Git & GitHub
              <br />
              <span className="text-secondary  mr-1 font-bold">
                Back-End Development:
              </span>
              TypeScript, Node JS
              <br />
              <span className="text-secondary  mr-1 font-bold">Databases:</span>
              MongoDB
              <br />
              <span className="text-secondary  mr-1 font-bold">Design:</span>
              Figma
              <br />
              <br /> I&apos;m a strong believer in continuous learning and
              staying up-to-date with the latest technologies. I&apos;m also an
              advocate for clean code and best practices. <br />
              <br />
              During my internship as a full-stack developer, I gained valuable
              experience working on real-world projects. I&apos;m eager to
              leverage my skills and knowledge to contribute to innovative web
              development projects. <br />
              <br />
              <span className="text-secondary font-bold  mr-1">
                Let&apos;s connect and discuss how I can help bring your web
                ideas to life!
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <a href="/#contact" className="mr-2">
              <GradientButton>Hire Me</GradientButton>
            </a>
            <a
              href="Fazle-Rabbi-Fahad-Full-stack Developer.pdf"
              download="Fazle-Rabbi-Fahad-Full-stack Developer.pdf"
              target="_blank"
            >
              <SecondButton>Resume</SecondButton>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
