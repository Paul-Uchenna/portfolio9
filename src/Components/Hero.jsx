import React from "react";
import Particle from "./Particle";
import banner from "../assets/images/banner.jpg";
import cvfiles from "../assets/curriculumvitae.pdf";
import profilepic from "../assets/images/profilePic.jpg";
import TextEffect from "./TextEffect";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="relative h-[100vh] pt-[5rem]">
        <Particle />

        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              Hi, I am{" "}
              <span className="text-[#f021b2] font-custom">Paul Uchenna</span>
            </h1>
            <TextEffect />
            <p className="mt-4 text-[15px] text-[#ffffff92]">
              Passionate about creating innovative solutions that make a
              difference. I thrive on challenges and love turning ideas into
              reality. With a strong foundation in technology and a creative
              mindset, I am ready to take on new opportunities and drive
              impactful change.
            </p>

            <div className="mt-4 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 text-[#f021b2] text-xl font-semibold">
              <Link to="/contact">
                <button className="rounded px-[10px] py-[10px] hover:bg-[#55e6a5] hover:text-black transition-all duration-300">
                  Let&apos;s Talk
                </button>
              </Link>
              <a
                href={cvfiles}
                download="CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center rounded px-[10px] py-[10px] hover:bg-[#55e6a5] hover:text-black transition-all duration-300">
                  <FaDownload className="mr-2" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center lg:justify-end">
            <div
              data-aos-zoom-in
              className="w-[350px] h-[370px] lg:w-[350px] lg:h-[400px] relative rounded overflow-hidden lg:mr-10"
            >
              <img
                src={profilepic}
                alt="user"
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
        <img
          src={banner}
          objectFit="cover"
          alt="banner"
          className="absolute top-0 left-0 -z-50 h-full w-full"
        />
      </div>
    </>
  );
}

export default Hero;
