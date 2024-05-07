import React from "react";
import brandLogo from "../assets/brand-logo.svg";

const Header = () => {
  return (
    <section className="p-[24px] pb-0">
      <div className="flex justify-between pl-[52px] pr-[21px] py-[17px] items-center rounded-[65.28px] border-[1.31px] border-[#EAEAEA]">
        <div>
          <img className="w-[110px]" src={brandLogo} alt="Brand Logo" />
        </div>
        <div className="flex flex-row gap-x-[16px]">
        {/* TODO: apply link */}
          <button className="text-[#1C1C1C] text-[18px] font-medium px-[42px] py-[26px] rounded-[107px] border-[1.31px] border-[#EAEAEA]">
            Get projects
          </button>
          <button className="text-[#FFFFFF] bg-[#1C1C1C] text-[18px] font-semibold px-[42px] py-[26px] rounded-[107px]">
            Onboard Talent
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
