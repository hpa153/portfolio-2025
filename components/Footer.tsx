import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-sm:pt-10 pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Am I the the missing piece to achieve{" "}
          <span className="text-purple">your</span> goals?
        </h1>
        <p className="text-white-200 my-5 md:mt-10 text-center">
          Wait no longer to grab the candidate to elevate your company's values.
        </p>
        <a href="mailto:phuonganhhoang.153@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright © 2024 Phuong Anh Hoang
        </p>
        <div className="flex items-center max-sm:mt-2 md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
