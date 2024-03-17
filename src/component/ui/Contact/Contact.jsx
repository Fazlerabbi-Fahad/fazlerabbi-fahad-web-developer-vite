import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import Map from "../../shared/Map/Map";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4cy52pd",
        "template_0yaheu4",
        form.current,
        "7Wr4c3ZuyIJc4V3Ri"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Your message has been sent. Wait for the response.");
        },
        (error) => {
          console.log(error);
          toast.error("Sorry, there are some issues. Try Later.");
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="px-0 md:px-16 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">
        <div>
          <div className="bg-[#171a1e] rounded-lg shadow-sm shadow-black relative h-[550px] sm:h-[488px]">
            <div className="absolute w-full bottom-0 left-0">
              <Map />
            </div>
            <div className="px-10 pt-7">
              <h4 className="font-semibold text-center text-white text-xl md:text-2xl mb-5 sm:mb-8">
                Contact With Me
              </h4>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex justify-start mb-2">
                    <div>
                      <FaPhoneVolume className="mr-4 mt-4 text-secondary text-xl" />
                    </div>

                    <div>
                      <p className="text-white text-start text-sm font-light">
                        Phone:
                      </p>
                      <Link
                        href="https://api.whatsapp.com/send/?phone=8801729992254"
                        className="text-white text-start  text-sm font-light"
                        target="_blank"
                        data-tooltip-id="my-tooltip-1"
                        data-tooltip-content="Whatsapp"
                      >
                        +880 1729992254
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-start mb-2">
                    <div>
                      <MdAlternateEmail className="mr-4 mt-4 text-secondary text-2xl" />
                    </div>

                    <div>
                      <p className="text-white text-start  text-sm font-light">
                        Email:
                      </p>
                      <Link
                        href="mailto:fazlerabbifahad.54@gmail.com"
                        target="_blank"
                        className="text-white text-start break-all  text-sm font-light text-wrap"
                        data-tooltip-id="my-tooltip-2"
                        data-tooltip-content="Email"
                      >
                        fazlerabbifahad.54@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-start mb-2">
                    <div>
                      <IoLocationSharp className="mr-4 mt-4 text-secondary text-xl" />
                    </div>

                    <div>
                      <p className="text-white text-start  text-sm font-light">
                        Address:
                      </p>
                      <p
                        className="text-white text-start text-sm font-light"
                        data-tooltip-id="my-tooltip-3"
                        data-tooltip-content="Address"
                      >
                        Bashundhara R/A, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start mb-2">
                    <div>
                      <BsGlobe className="mr-4 mt-4 text-secondary text-xl" />
                    </div>

                    <div>
                      <p className="text-white text-start  text-sm font-light">
                        Website:
                      </p>
                      <Link
                        href="https://fazlerabbi-fahad.web.app/"
                        className="text-white text-start text-sm font-light"
                        target="_blank"
                        data-tooltip-id="my-tooltip-4"
                        data-tooltip-content="Website"
                      >
                        https://fazlerabbi-fahad.web.app/
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="bg-[#171a1e] p-10 rounded-lg shadow-sm shadow-black h-[488px]">
            <div className="mb-5">
              <h4 className="text-base font-medium text-white m-2">
                Your Name:
              </h4>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered input-white text-sm w-full"
                required
              />
            </div>
            <div className="mb-5">
              <h4 className="text-base font-medium text-white m-2">
                Your Email:
              </h4>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered input-white text-sm w-full"
                required
              />
            </div>
            <div className="mb-5">
              <h4 className="text-base font-medium text-white m-2">
                Your Message:
              </h4>
              <textarea
                name="message"
                className="textarea textarea-bordered text-sm w-full h-24"
                placeholder="Type here"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-secondary py-3 rounded-md w-full text-base font-semibold text-white hover:animate-pulse"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Tooltip id="my-tooltip-1" />
      <Tooltip id="my-tooltip-2" />
      <Tooltip id="my-tooltip-3" />
      <Tooltip id="my-tooltip-4" />
      <Toaster />
    </div>
  );
}
