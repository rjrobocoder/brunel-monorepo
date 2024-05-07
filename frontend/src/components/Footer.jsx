import React from "react";
import copyrightIcon from "../assets/copyright-icon.svg";

const Footer = () => {
    const footer_navitems = [
        {
            title: "Terms & Conditions",
            href: "#",
        },
        {
            title: "Privacy Policy",
            href: "#",
        }
    ];

  return (
    <div className="flex flex-row justify-between items-center rounded-[40px] py-[60px] px-[48px] bg-[#F5F5F5]">
      <div>
        <div className="flex gap-x-[10px]">
          <img src={copyrightIcon} alt="©" />
          <p className="text-[18px] text-[#1C1C1C] font-medium">
            Talup 2023. All rights reserved
          </p>
        </div>
      </div>
      <div>
        <ul className="flex text-[18px] text-[#1C1C1C] font-normal underline gap-x-[52px]">
        {/* TODO: apply map */}
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
