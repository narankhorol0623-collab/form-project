import React from "react";

export const Success = () => {
  return (
    <div className="w-[416px] h-[129px] flex flex-col gap-4">
      <img className="w-[60px] h-[60px]" src="logo.png" alt="" />
      <p className="w-[416px] h-[31px] font-semibold text-[26px] text-[#202124]">
        You're All Set 🔥
      </p>
      <p className="w-[416px] h-[22px] font-normal text-[18px] text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
