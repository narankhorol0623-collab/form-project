import React from "react";

export const Header = () => {
  return (
    <div className="w-[416px] h-[129px] flex flex-col gap-2">
      <img className="w-[60px] h-[60px]" src="Main 1.png" alt="" />
      <div className="w-[416px] h-[31px] font-semibold text-[26px] text-[#202124] text-shadow-[0_4px_4px_#00000040]">
        Join Us! 😎
      </div>
      <div className="w-[416px] h-[22px] font-normal text-[18px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
