import React, { useState } from "react";
import brandLogo from "../assets/brand-logo.svg";
import closeIcon from "../assets/close.svg";
import warnIcon from "../assets/warn-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    // If all validations pass, clear error and handle form submission
    setError("");
    // Handle form submission here
    setName("");
    setEmail("");
    navigate("/success");
  };

  return (
    <div>
      <Helmet>
        <title>Brunel - Register</title>
      </Helmet>
      <header className="flex justify-between px-[24px] sm:px-[52px] py-[32px] items-center">
        <div>
          <img className="w-[110px]" src={brandLogo} alt="Brand Logo" />
        </div>
        <Link
          to="/"
          className="border border-[#CACACA] bg-[#FFFFFF] hover:bg-[#F1F1F1] p-[10px] sm:p-[15px] rounded-full"
        >
          <img
            className="w-[24px] sm:w-[32px]"
            src={closeIcon}
            alt="close"
            title="Close"
          />
        </Link>
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
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="max-w-[417px] w-full bg-[#EFEFEF] px-[30px] sm:px-[36px] py-[16px] sm:py-[24px] text-[18px] sm:text-[20px] rounded-[64px] border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#537FF1] placeholder-[#827A7A]"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="max-w-[417px] w-full bg-[#EFEFEF] px-[30px] sm:px-[36px] py-[16px] sm:py-[24px] text-[18px] sm:text-[20px] rounded-[64px] border border-[#EAEAEA] mt-[24px] focus:outline-none focus:ring-2 focus:ring-[#537FF1] placeholder-[#827A7A] mb-[12px]"
            />
            {error && (
              <div className="flex items-center max-w-[417px] w-full gap-x-[7px]">
                <div>
                  <img src={warnIcon} alt="!" />
                </div>
                <p className="text-[16px] text-[#FF0808] font-medium">
                  {error}
                </p>
              </div>
            )}
            <button
              className={`max-w-[417px] w-full ${
                !name.trim() && !email.trim()
                  ? "bg-[#C9C9C9] cursor-not-allowed"
                  : "bg-[#1C1C1C]"
              } text-[#FFFFFF] px-[50px] py-[20px] sm:py-[26px] text-[18px] rounded-[107px] mt-[30px] sm:mt-[47px]`}
              onClick={handleSubmit}
              disabled={!name.trim() && !email.trim()}
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
