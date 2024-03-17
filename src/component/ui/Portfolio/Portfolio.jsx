import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientButton from "../../shared/GradientButton";

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/sKbbTQH/Fazle-Rabbi-Fahad.png",
    title: "Fazle Rabbi Fahad - Full-Stack Web Developer",
    duration: "Feb, 2024 - March, 2024",
    line1:
      "1. I have created my website using Vite, Tailwind CSS(DaisyUI), JS-Map-Loader",
    line2: "2. Its about me, a full website",
    line3: "3. Anyone can hire me for there website",
    live: "https://fazlerabbi-fahad.web.app/",
    client:
      "https://github.com/Fazlerabbi-Fahad/fazlerabbi-fahad-web-developer-vite",
    server:
      "https://github.com/Fazlerabbi-Fahad/fazlerabbi-fahad-web-developer-vite",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "Fazle Rabbi Fahad - Full-Stack Web Developer",
  },
  {
    id: 2,
    image: "https://i.ibb.co/V2jVgpG/Be-Someone-Special.png",
    title: "Will Be Accepted",
    duration: "Feb, 2024 - Feb, 2024",
    line1: "1. I have created my website using Vite, Tailwind CSS",
    line2: "2. Its just a funny website for valentine day",
    line3: "3. You can propose your crush with it and no one can reject it",
    live: "https://willbeaccepted.web.app/",
    client: "https://github.com/Fazlerabbi-Fahad/willbeaccepted",
    server: "https://github.com/Fazlerabbi-Fahad/willbeaccepted",
    dataTooltipId: "my-tooltip-2",
    dataTooltipContent: "Will Be Accepted",
  },
  {
    id: 3,
    image: "https://i.ibb.co/NCVvcL8/Todo-List-By-Fahad.png",
    title: "Todo List",
    duration: "Nov, 2023 - Dec, 2023",
    line1: "1. I have created my website using Vite, Tailwind CSS",
    line2: "2. Its a website to maintain your daily work",
    line3: "3. You can add your daily day tasks here",
    live: "https://todolistbyfahad.web.app/",
    client: "https://github.com/Fazlerabbi-Fahad/todoList",
    server: "https://github.com/Fazlerabbi-Fahad/todoList",
    dataTooltipId: "my-tooltip-3",
    dataTooltipContent: "Todo List",
  },
  {
    id: 4,
    image: "https://i.ibb.co/R93sWPr/Recycle-BIN.png",
    title: "RecycleBIN-A website for selling used furniture",
    duration: "Nov, 2022 - Dec, 2022",
    line1: "1. A responsive, fully-functional re-selling website",
    line2:
      "2. Allowing customers and sellers to create an account,browse products, buy products & write reviews",
    line3:
      "3. Admins can delete any sellers and buyers, sellers have the ability to add products, remove existing products,buyers can buy products.",
    live: "https://recycle-bin-8fe8b.web.app/",
    client: "https://github.com/Fazlerabbi-Fahad/recycle_bin_client",
    server: "https://github.com/Fazlerabbi-Fahad/recycle_bin_server",
    dataTooltipId: "my-tooltip-4",
    dataTooltipContent: "RecycleBIN-A website for selling used furniture",
  },
];

export default function Portfolio() {
  const renderProject = (project, index) => {
    if (index % 2 === 0) {
      return (
        <div className="hero my-10 ">
          <div className="hero-content  flex-col md:flex-row-reverse">
            <div className="relative">
              <div className="border-[8px] rounded-md border-secondary w-[150px] sm:w-[200px] h-[100px] sm:h-[150px]">
                <div></div>
              </div>
              <div className="w-[150px] sm:w-[200px] h-[100px] sm:h-[150px] bg-black rounded-md absolute bottom-5 left-5">
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  data-tooltip-id={project.dataTooltipId}
                  data-tooltip-content={project.dataTooltipContent}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="mr-0 lg:mr-36 mt-5 md:mt-0 max-w-lg">
              <h4 className="font-semibold text-sm sm:text-xl text-white">
                Project {project.id}
              </h4>
              <h6 className="font-medium text-sm sm:text-xl text-white">
                {project.title}
              </h6>
              <div className="text-white text-sm sm:text-base text-normal text-justify my-3">
                <small>{project.duration}</small>
                <ul>
                  <li>{project.line1}</li>
                  <li>{project.line2}</li>
                  <li>{project.line3}</li>
                </ul>
              </div>
              <div>
                <GradientButton>
                  <div className="flex justify-center">
                    <Link
                      to={project.live}
                      className="text-white border-r-2 px-2 border-white"
                      data-tooltip-id="my-tooltip-1"
                      data-tooltip-content="Live Website"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <IoIosGlobe />
                      </span>
                    </Link>
                    <Link
                      to={project.client}
                      className="text-white border-r-2 px-2 border-white"
                      data-tooltip-id="my-tooltip-2"
                      data-tooltip-content="Client Site"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <FaGithub />
                      </span>
                    </Link>
                    <Link
                      to={project.server}
                      className="text-white px-2 border-white"
                      data-tooltip-id="my-tooltip-3"
                      data-tooltip-content="Server Site"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <FaServer />
                      </span>
                    </Link>
                  </div>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hero my-20">
          <div className="hero-content flex-col md:flex-row">
            <div className="relative">
              <div className="border-[8px] rounded-md border-secondary w-[150px] sm:w-[200px] h-[100px] sm:h-[150px]">
                <div></div>
              </div>
              <div className="w-[150px] sm:w-[200px] h-[100px] sm:h-[150px] bg-black rounded-md absolute bottom-5 left-5">
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  data-tooltip-id={project.dataTooltipId}
                  data-tooltip-content={project.dataTooltipContent}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="ml-0 md:ml-5 lg:ml-36 mt-5 md:mt-0 max-w-lg">
              <h4 className="font-semibold text-sm sm:text-xl text-white">
                Project {project.id}
              </h4>
              <h6 className="font-medium text-sm sm:text-xl text-white">
                {project.title}
              </h6>
              <div className="text-white text-sm sm:text-base text-normal text-justify my-3">
                <small>{project.duration}</small>
                <ul>
                  <li>{project.line1}</li>
                  <li>{project.line2}</li>
                  <li>{project.line3}</li>
                </ul>
              </div>
              <div>
                <GradientButton>
                  <div className="flex justify-center">
                    <Link
                      to={project.live}
                      className="text-white border-r-2 px-2 border-white"
                      data-tooltip-id="my-tooltip-1"
                      data-tooltip-content="Live Website"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <IoIosGlobe />
                      </span>
                    </Link>
                    <Link
                      to={project.client}
                      className="text-white border-r-2 px-2 border-white"
                      data-tooltip-id="my-tooltip-2"
                      data-tooltip-content="Client Site"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <FaGithub />
                      </span>
                    </Link>
                    <Link
                      to={project.server}
                      className="text-white px-2 border-white"
                      data-tooltip-id="my-tooltip-3"
                      data-tooltip-content="Server Site"
                      target="_blank"
                    >
                      <span className="hover:animate-ping">
                        <FaServer />
                      </span>
                    </Link>
                  </div>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div id="portfolio" className="py-5 lg:py-20 rounded-lg">
        <div>
          <div>
            <h1 className="font-semibold text-center text-white text-xl sm:text-2xl my-5">
              Portfolio
            </h1>
          </div>
          <div className="pt-5  md:pt-10">
            <div>
              {data.map((project, index) => (
                <div key={project.id}>{renderProject(project, index)}</div>
              ))}
            </div>
            <div className="text-center">
              <Link to="portfolio">
                <GradientButton>View All</GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
