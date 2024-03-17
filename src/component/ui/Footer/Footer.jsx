import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import GradientButton from "../../shared/GradientButton";
import "../../../assets/styles.css";

export default function Footer() {
  return (
    <div className="bg-[#171a1e] w-full">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 md:gap-2 text-white py-5  md:py-20  border-b border-white">
          <div className="mb-5 md:mb-0">
            <h1 className="font-semibold text-center md:text-start  text-white text-xl sm:text-2xl pl-0 md:pl-20">
              Let&apos;s TALK
            </h1>
            <div className="text-center md:text-start mb-8 md:mb-0 pl-0 md:pl-20 mt-4">
              <a href="/#contact">
                <GradientButton>
                  <div className="flex justify-center align-middle items-center">
                    Click to Contact
                    <FaArrowRight className="ml-1" />
                  </div>
                </GradientButton>
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <div className="text-center">
              <h4 className="text-xl font-semibold pb-2">Quick Link</h4>
              <ul className="text-white text-base font-normal block lg:flex justify-evenly">
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
              <div className="text-center md:text-start mb-8 md:mb-0 pl-0 md:pl-20 mt-4">
                <Link to="portfolio" className="hover:animate-pulse">
                  <div className="buttonHeader">
                    <button>Previous Projects</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mb-3 md:mb-0">
            <div>
              <h4 className="pr-0 md:pr-20 text-xl font-semibold pb-2 mb-3">
                Address
              </h4>
              <div className="text-white text-base font-normal text-center pl-0 lg:pl-10">
                <p className="flex justify-center sm:justify-start mb-3">
                  <IoLocationSharp className="mr-2 text-secondary " />
                  <span className="text-textColor font-light text-xs">
                    Bashundhara R/A, Dhaka, Bangladesh
                  </span>
                </p>
                <p className="flex justify-center sm:justify-start mb-3">
                  <MdAlternateEmail className="mr-2  text-secondary " />
                  <span className="text-textColor font-light text-xs">
                    fazlerabbifahad.54@gmail.com
                  </span>
                </p>
                <p className="flex justify-center sm:justify-start mb-3">
                  <FaPhoneVolume className="mr-2 text-secondary " />
                  <span className="text-textColor font-light text-xs">
                    +880 1729992254
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://fazlerabbi-fahad.web.app/"
              target="_blank"
              data-tooltip-id="my-tooltip-1"
              data-tooltip-content="Website"
            >
              <BsGlobe />
            </Link>
          </div>
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://www.linkedin.com/in/fazle-rabbi-fahad/"
              target="_blank"
              data-tooltip-id="my-tooltip-2"
              data-tooltip-content="Linkedin"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://github.com/Fazlerabbi-Fahad"
              target="_blank"
              data-tooltip-id="my-tooltip-3"
              data-tooltip-content="GitHub"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://api.whatsapp.com/send/?phone=8801729992254"
              target="_blank"
              data-tooltip-id="my-tooltip-4"
              data-tooltip-content="Whatsapp"
            >
              <FaWhatsapp />
            </Link>
          </div>
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://www.facebook.com/fablerabbi.fahad"
              target="_blank"
              data-tooltip-id="my-tooltip-5"
              data-tooltip-content="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>
          <div className="text-secondary text-2xl px-2">
            <Link
              to="https://www.instagram.com/fazlerabbi_fahad/"
              target="_blank"
              data-tooltip-id="my-tooltip-6"
              data-tooltip-content="Instagram"
            >
              <FaInstagram />
            </Link>
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
