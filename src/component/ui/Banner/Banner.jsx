import { FaStar } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "../../../assets/styles.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="mb-10 px-0 md:px-32">
      <div>
        <div className="hero">
          <div className="z-0 grid grid-cols-1 sm:flex sm:flex-row-reverse max-w-7xl mx-auto sm:items-center">
            <div className="pr-32">
              <div className="relative my-5">
                <div className="border-[10px] lg:border-[20px] border-secondary w-16 lg:w-40 h-[240px] lg:h-[460px]">
                  <div></div>
                </div>
                <div className="absolute top-[8%] left-[40%]  lg:left-[45%] rectangleWrap">
                  <div className="rectangle"></div>
                  <div className="absolute bottom-0 left-5">
                    <img
                      src="https://i.ibb.co/SNRBwtF/images.png"
                      style={{ maxWidth: "85%", height: "auto" }}
                      alt="Fazle Rabbi Fahad"
                      data-tooltip-id="my-tooltip-6"
                      data-tooltip-content="Fazle Rabbi Fahad"
                    />
                  </div>
                  <div className="absolute bottom-0 left-[-25%]  bg-[#171a1e] w-24 lg:w-48 h-10 lg:h-16 rounded-sm text-center py-0 lg:py-1">
                    <span className="text-secondary font-semibold text-xs lg:text-2xl">
                      1+
                    </span>
                    <span className="text-white text-[8px] lg:text-base flex justify-center items-center">
                      <FaStar className="border-2 rounded-full border-white mr-1" />
                      <span className="font-medium text-[8px] lg:text-base">
                        Years of Experiences
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 pr-0 lg:pr-2  pb-1 lg:pb-3 text-center">
                    <div>
                      <div
                        className="w-[1px] h-10 lg:h-28 py-1 lg:py-2 m-0 ml-1.5"
                        style={{ backgroundColor: "#750310" }}
                      ></div>
                      <div className="pr-1">
                        <div className="text-secondary text-xs lg:text-xl py-1">
                          <Link
                            to="https://www.linkedin.com/in/fazle-rabbi-fahad/"
                            target="_blank"
                            data-tooltip-id="my-tooltip-1"
                            data-tooltip-content="Linkedin"
                          >
                            <FaLinkedin />
                          </Link>
                        </div>
                        <div className="text-secondary text-xs lg:text-xl py-1">
                          <Link
                            to="https://github.com/Fazlerabbi-Fahad"
                            target="_blank"
                            data-tooltip-id="my-tooltip-2"
                            data-tooltip-content="GitHub"
                          >
                            <FaGithub />
                          </Link>
                        </div>
                        <div className="text-secondary text-xs lg:text-xl py-1">
                          <Link
                            to="https://api.whatsapp.com/send/?phone=8801729992254"
                            target="_blank"
                            data-tooltip-id="my-tooltip-3"
                            data-tooltip-content="Whatsapp"
                          >
                            <FaWhatsapp />
                          </Link>
                        </div>
                        <div className="text-secondary text-xs  lg:text-xl py-1">
                          <Link
                            to="https://www.facebook.com/fablerabbi.fahad"
                            target="_blank"
                            data-tooltip-id="my-tooltip-4"
                            data-tooltip-content="Facebook"
                          >
                            <FaFacebook />
                          </Link>
                        </div>
                        <div className="text-secondary text-xs lg:text-xl py-1">
                          <Link
                            to="https://www.instagram.com/fazlerabbi_fahad/"
                            target="_blank"
                            data-tooltip-id="my-tooltip-5"
                            data-tooltip-content="Instagram"
                          >
                            <FaInstagram />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-0 sm:pr-24">
              <div>
                <h1>
                  <span className="text-white text-lg lg:text-4xl font-normal">
                    I’M{" "}
                  </span>
                  <span className="text-secondary text-xl lg:text-5xl font-semibold">
                    Fazle Rabbi Fahad
                  </span>
                  <br />
                  <span className="text-white text-lg lg:text-4xl font-normal">
                    Full-stack Developer
                  </span>
                </h1>
                <div className="m-2">
                  <Link to="portfolio" className="hover:animate-pulse">
                    <div className="buttonHeader">
                      <button>Previous Projects</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip-1" />
      <Tooltip id="my-tooltip-2" />
      <Tooltip id="my-tooltip-3" />
      <Tooltip id="my-tooltip-4" />
      <Tooltip id="my-tooltip-5" />
      <Tooltip id="my-tooltip-6" />
    </div>
  );
}
