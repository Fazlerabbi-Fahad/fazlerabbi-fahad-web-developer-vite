import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientButton from "../../shared/GradientButton";

const data = [
  {
    id: 1,
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
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "RecycleBIN-A website for selling used furniture",
  },
  {
    id: 2,
    image: "https://i.ibb.co/R3JQW55/Onnorokom.png",
    title: "Onnorokom Pathshala-A online learning platform",
    duration: "Nov, 2022 - Nov, 2022",
    line1: "1. A responsive, fully-functional online learning website",
    line2: "2. Allowing learners to create an account,browse classes",
    line3: "3. Has firebase authentication(Google, Github, and Email)",
    live: "https://onnorokom-pathsala-d832f.web.app/",
    client: "https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Client",
    server: "https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Server",
    dataTooltipId: "my-tooltip-2",
    dataTooltipContent: "Onnorokom Pathshala-A online learning platform",
  },
  {
    id: 3,
    image: "https://i.ibb.co/M5tQQkV/PhotoGAL.png",
    title: "PhotoGAL-A photographer's service selling website",
    duration: "Nov, 2022 - Nov, 2022",
    line1: "1. A responsive, fully-functional photographer's website",
    line2: "2. Allowing see my services and take services",
    line3: "3. Has firebase authentication(Google, Github, and Email)",
    live: "https://photogal54.netlify.app/",
    client: "https://github.com/Fazlerabbi-Fahad/photoGAL-client-side",
    server: "https://github.com/Fazlerabbi-Fahad/photoGAL-server-side",
    dataTooltipId: "my-tooltip-3",
    dataTooltipContent: "PhotoGAL-A photographer's service selling website",
  },
  {
    id: 4,
    image: "https://i.ibb.co/71z6365/News.png",
    title: "News 24/7-A website for reading news",
    duration: "Oct, 2022 - Oct, 2022",
    line1:
      "1. I have created my website using HTML, Tailwind CSS(DaisyUI), JavaScript",
    line2: "2. User can add your daily works and break time",
    line3: "3. User can read news",
    live: "https://news-54.netlify.app/",
    client: "https://github.com/Fazlerabbi-Fahad/news-24-7",
    server: "https://github.com/Fazlerabbi-Fahad/news-24-7",
    dataTooltipId: "my-tooltip-4",
    dataTooltipContent: "News 24/7-A website for reading news",
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
                      href={project.live}
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
                      href={project.client}
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
                      href={project.server}
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
                      href={project.live}
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
                      href={project.client}
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
                      href={project.server}
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
