import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
} from "react-icons/bi";

const frontend = [
  {
    id: 1,
    icon: <TiHtml5 />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "HTML5",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-2",
    dataTooltipContent: "CSS3",
  },
  {
    id: 3,
    icon: <BiLogoJavascript />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-3",
    dataTooltipContent: "JavaScript",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-4",
    dataTooltipContent: "Bootstrap",
  },
  {
    id: 5,
    icon: <SiTailwindcss />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-5",
    dataTooltipContent: "Tailwind CSS",
  },
  {
    id: 6,
    icon: <SiMui />,
    experience: "Expertise",
    dataTooltipId: "my-tooltip-6",
    dataTooltipContent: "Material UI",
  },
];

const backend = [
  {
    id: 1,
    icon: <BiLogoNodejs />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "Node JS",
  },
  {
    id: 2,
    icon: <BiLogoTypescript />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-2",
    dataTooltipContent: "TypeScript",
  },
];

const libraries = [
  {
    id: 1,
    icon: <RiReactjsFill />,
    experience: "Experienced",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "React JS",
  },
  {
    id: 2,
    icon: <SiNextdotjs />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-2",
    dataTooltipContent: "Next JS",
  },
];

const state = [
  {
    id: 1,
    icon: <SiRedux />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "Redux",
  },
];

const database = [
  {
    id: 1,
    icon: <SiMongodb />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "MongoDB",
  },
];

const tools = [
  {
    id: 1,
    icon: <SiGithub />,
    experience: "Comfortable",
    dataTooltipId: "my-tooltip-1",
    dataTooltipContent: "GitHub",
  },
];

export default function Skills() {
  return (
    <div className="bg-[#171a1e] p-5 lg:p-20 rounded-lg my-20">
      <div>
        <h1 className="font-semibold text-center text-white text-xl sm:text-2xl">
          Skills
        </h1>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            Frontend Development
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {frontend.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            Backend Development
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {backend.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            JavaScript Frameworks
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {libraries.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            State Management
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {state.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            Database
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {database.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium text-white text-center text-lg sm:text-xl">
            Version Control
          </h5>
          <div className="flex flex-wrap max-w-2xl justify-center mt-5 mb-10 mx-auto">
            {tools.map((item) => (
              <div
                key={item.id}
                className="text-secondary  text-center text-4xl sm:text-6xl mx-auto px-4 mb-2 md:mb-0"
              >
                <div>
                  <div
                    className="ml-2"
                    data-tooltip-id={item.dataTooltipId}
                    data-tooltip-content={item.dataTooltipContent}
                  >
                    {item.icon}
                  </div>

                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
