import React from "react";
import aboutImg from "../assets/images/about.jpg";
import cvfiles from "../assets/curriculumvitae.pdf";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="bg-[#121121] pb-[3rem] pt-[3rem] md:pt-[8rem] h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md:[1rem]">
              About Me
            </h1>
            <h2 className="text-[20px] md:text-[35px] lg:text-[30px] font-semibold text-white lg:mt-6 mb-[3rem]">
              <span className="whitespace-nowrap">
                I am Paul Uchenna a{" "}
                <span className="font-bold text-[#f021b2]">Web Developer</span>
              </span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <sapn className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></sapn>
              <p className="text-[19px] text-slate-300 w-[75%] text-justify">
                I'm a Creative and UI/UX designer from Dakar, Sénégal,
                specializing in web development. I create functional,
                user-friendly, and attractive websites that effectively convey
                your message and identity. Passionate about innovative
                solutions, I thrive on challenges and turning ideas into
                reality, leveraging my strong technology background and creative
                mindset.
              </p>
            </div>

            <a
              href={cvfiles}
              download="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded max-w-[200px] text-black bg-[#55e6a5] text-xl font-semibold px-[10px] py-[10px]"
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </div>

          <div className="lg:w-[450px] lg:ml-4 mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
            <img
              src={aboutImg}
              alt="about user"
              objectFit="contain"
              className="relative z-10 w-full h-full object-contain"
            />
            <div className="absolute w-[100%] h-[90%] z-9 bg-[#55e6a5] top-[1%] right-[-5%]"></div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
