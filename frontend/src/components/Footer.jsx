import React from "react";
import copyrightIcon from "../assets/copyright-icon.svg";
import { Link } from "react-router-dom";

const footer_navitems = [
  {
    title: "Terms & Conditions",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-row justify-between items-center rounded-[40px] py-[60px] px-[48px] bg-[#F5F5F5]">
      <div>
        <div className="flex gap-x-[10px]">
          <img src={copyrightIcon} alt="©" />
          <p className="text-[18px] text-[#1C1C1C] font-medium">
            Talup {currentYear}. All rights reserved
          </p>
        </div>
      </div>
      <div>
        <ul className="flex text-[18px] text-[#1C1C1C] font-normal underline gap-x-[52px]">
          {footer_navitems?.map((item, index) => (
            <Link to={item?.href} key={index}>
              <li>{item?.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
