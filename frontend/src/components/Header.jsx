import React from "react";
import brandLogo from "../assets/brand-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="p-[24px] pb-0">
      <div className="flex justify-between pl-[52px] pr-[21px] py-[17px] items-center rounded-[65.28px] border-[1.31px] border-[#EAEAEA]">
        <div>
          <img className="w-[110px]" src={brandLogo} alt="Brand Logo" />
        </div>
        <div className="flex flex-row gap-x-[16px]">
          <Link
            to="/registration"
            className="text-[#1C1C1C] text-[18px] font-medium bg-[#FFFFFF] hover:bg-[#F1F1F1] px-[42px] py-[26px] rounded-[107px] border-[1.31px] border-[#EAEAEA]"
          >
            Get projects
          </Link>
          <button className="text-[#FFFFFF] bg-[#1C1C1C] hover:bg-[#4E4E4E] text-[18px] font-semibold px-[42px] py-[26px] rounded-[107px]">
            Onboard Talent
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
