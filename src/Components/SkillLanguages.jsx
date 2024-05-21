import React from "react";

// The SkillLanguages component displays the proficiency levels for different programming languages.

function SkillLanguages(props) {
  return (
    <>
      <div>
        <div className="relative mb-[3rem]">
          <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {props.skill1}
          </h1>
          <span
            className={`${props.level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
          ></span>
        </div>

        <div className="relative mb-[3rem]">
          <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {props.skill2}
          </h1>
          <span
            className={`${props.level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
          ></span>
        </div>

        <div className="relative mb-[3rem]">
          <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {props.skill3}
          </h1>
          <span
            className={`${props.level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
          ></span>
        </div>
      </div>
    </>
  );
}

export default SkillLanguages;
