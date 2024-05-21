import React from "react";
import { FaCode } from "react-icons/fa";
import p1 from "../assets/images/P1.png";
import p2 from "../assets/images/P2.png";
import p3 from "../assets/images/P3.png";
import p4 from "../assets/images/P4.png";
import p5 from "../assets/images/P5.png";
import p6 from "../assets/images/P6.png";
import p7 from "../assets/images/P7.png";
import p8 from "../assets/images/P8.png";
import p9 from "../assets/images/P9.png";
import p10 from "../assets/images/P10.png";

function Project() {
  return (
    <>
      <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          PRO<span className="text-[#f021b2]">JECTS</span>
        </h1>

        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20HTML%20%26%20CSS/checkpoint5-Bootstrap%20Components"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p1} alt="" objectFit="contain" className="" />

              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>
                    A landing page for a travel agency using Bootstrap
                    components
                  </p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20HTML%20%26%20CSS/checkpoint6-Responsive%20Store%20Landing%20Page%20Design"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p2} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>
                    A responsive landing page for an online store using
                    Bootstrap components
                  </p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20HTML%20%26%20CSS/checkpoint7-Personal%20Portfolio%20Tailwind%20CSS"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p3} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>A webpage for a personal portfolio using Tailwind CSS.</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20JavaScript/chechpoint3-shopping%20cart"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p4} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>A shopping cart using Tailwind CSS and JavaScrit</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20JavaScript/chechpoint7-Weather%20App"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p5} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>A Weather App project</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20JavaScript/chechpoint2-functions%20with%20JavaScript"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p6} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>
                    String, Array, and Mathematical Function Implementations
                    with JavaScript
                  </p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/chechpoint%20React%20JS/checkpoint2-react"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p7} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>Create Custom FIFA Player Cards Built with React</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/chechpoint%20React%20JS/checkpoint6-react%20Movie%20App%202"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p9} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>A Movie LIst App Built with React</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/chechpoint%20React%20JS/checkpoint8-redux%20TodoList"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p10} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>A ToDo List Application built with Redux</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href={
              "https://github.com/Paul-Uchenna/Checkpoints/tree/main/Checkpoints%20Databases/chechpoint5-Data%20Manipulation%20language%20(DML)"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={p8} alt="" objectFit="contain" className="" />
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p>Database SQL</p>
                  <div className="flex items-center gap-[10px] justify-center mt-3 text-[#55e6a5]">
                    <FaCode size={20} />
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
