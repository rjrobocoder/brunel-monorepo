import React from "react";
import brandLogo from "../assets/brand-logo.svg";
import successIcon from "../assets/success-tick-icon.svg";

const SuccessPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between px-[24px] sm:px-[52px] py-[32px] items-center">
        <div>
          <img className="w-[110px]" src={brandLogo} alt="Brand Logo" />
        </div>
      </header>
      <div className="flex flex-col justify-center items-center text-center px-[24px] pb-[67px] h-[calc(100vh-173.6px)] sm:h-[calc(100vh-191.6px)] min-h-[494px]">
        <div className="max-w-[718px]">
          <div>
            <img
              className="mx-auto h-[70px] sm:h-[80px]"
              src={successIcon}
              alt="success"
            />
          </div>
          <h1 className="covered-by-your-grace-regular text-[#2DA950] text-[24px] sm:text-[36px] mt-[21px] sm:mt-[41px]">
            Success Submitted
          </h1>
          <p className="manrope-brunel max-w-[588px] w-full text-[36px] sm:text-[56px] text-[#1C1C1C] !font-semibold leading-[46px] sm:leading-[64px] mx-auto">
            Congratulations
          </p>
          <div>
            <p className="mt-[10px] sm:mt-[20px] text-[18px] sm:text-[27px] text-[#727272] leading-[28px] sm:leading-[38px]">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </div>
        </div>
        <div className="absolute bottom-[30px] sm:bottom-[42px]">
          <p className="text-[#727272] text-[15px] sm:text-[20px] font-normal">
            Redirecting you to Homepage in{" "}
            <span className="text-[#1C1C1C] font-bold">5 Seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
