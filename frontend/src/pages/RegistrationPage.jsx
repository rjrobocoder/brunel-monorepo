import React from "react";
import brandLogo from "../assets/brand-logo.svg";
import closeIcon from "../assets/close.svg";

const RegistrationPage = () => {
  return (
    <div>
      <header className="flex justify-between px-[24px] sm:px-[52px] py-[32px] items-center">
        <div>
          <img className="w-[110px]" src={brandLogo} alt="Brand Logo" />
        </div>
        <div className="border border-[#CACACA] p-[10px] sm:p-[15px] rounded-full">
          <img
            className="w-[24px] sm:w-[32px]"
            src={closeIcon}
            alt="close"
            title="Close"
          />
        </div>
      </header>
      <div className="flex flex-col justify-center text-center px-[24px] pb-[67px] h-[calc(100vh-173.6px)] sm:h-[calc(100vh-191.6px)]">
        <div>
          <h1 className="covered-by-your-grace-regular text-[#2DA950] text-[24px] sm:text-[36px]">
            Registration Form
          </h1>
          <p className="manrope-brunel max-w-[588px] w-full text-[46px] sm:text-[56px] text-[#1C1C1C] !font-semibold leading-[46px] sm:leading-[64px] mx-auto">
            Start your success Journey here!
          </p>
        </div>
        <div className="mt-[46px] sm:mt-[62px]">
          <div className="flex flex-col items-center">
            <input
              type="text"
              // value={inputValue}
              // onChange={handleInputChange}
              placeholder="Enter your name"
              className="max-w-[417px] w-full bg-[#EFEFEF] px-[30px] sm:px-[36px] py-[16px] sm:py-[24px] text-[18px] sm:text-[20px] rounded-[64px] border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#537FF1] placeholder-[#827A7A]"
            />
            <input
              type="email"
              // value={inputValue}
              // onChange={handleInputChange}
              placeholder="Enter your email"
              className="max-w-[417px] w-full bg-[#EFEFEF] px-[30px] sm:px-[36px] py-[16px] sm:py-[24px] text-[18px] sm:text-[20px] rounded-[64px] border border-[#EAEAEA] mt-[24px] focus:outline-none focus:ring-2 focus:ring-[#537FF1] placeholder-[#827A7A]"
            />
            <button
              className="max-w-[417px] w-full bg-[#C9C9C9] text-[#FFFFFF] px-[50px] py-[20px] sm:py-[26px] text-[18px] rounded-[107px] mt-[30px] sm:mt-[47px]"
              onClick={() => {
                // handle form submission
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
