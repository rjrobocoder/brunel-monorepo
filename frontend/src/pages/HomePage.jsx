import React from "react";
import Layout from "../components/Layout";
import heroImage from "../assets/hero-image.webp";
import heroPatern from "../assets/hero-pattern.svg";
import sparkleIcon from "../assets/sparkle-icon.svg";
import rocketIcon from "../assets/rocket-icon.svg";
import arrowRightIcon from "../assets/arrow-right-icon.svg";
import faqArrowIcon from "../assets/faq-arrow.svg";
import HeroCarousel from "../components/HeroCarousel";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";

const data = {
  rows: [
    {
      title: "Do you offer freelancers?",
      content: `Yes! Freelancers can join our platform to connect with clients in various fields.`,
    },
    {
      title:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      content:
        "We strive to ensure client satisfaction by offering transparent communication, a rigorous vetting process for talent, and providing opportunities for feedback and revisions. While we can't guarantee absolute satisfaction, we're committed to facilitating positive experiences and resolving any issues that may arise during the project.",
    },
    {
      title: "Can I hire multiple talents at once?",
      content: `If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.`,
    },
    {
      title: "Why should I not go to an agency directly?",
      content:
        "Opting for our platform offers diverse talent options, streamlined hiring, transparent pricing, and efficient project management tools, providing convenience and flexibility over traditional agency processes.",
    },
    {
      title: "Who can help me pick a right skillset and duration for me?",
      content:
        "Our platform provides resources to assist you in selecting the appropriate skillset and project duration. You can consult with our support team or utilize our project planning tools to determine the best fit for your needs.",
    },
  ],
};

const styles = {
  bgColor: "transparent",
  rowTitleColor: "#1C1C1C",
  rowContentColor: "#617275",
  rowTitleTextSize: "20px",
  rowContentTextSize: "15px",
  rowContentPaddingTop: "24px",
  rowContentPaddingBottom: "24px",
  transitionDuration: "0.5s",
  timingFunc: "ease",
};

const config = {
  expandIcon: "+",
  collapseIcon: "-",
  openOnload: true,
};

const HomePage = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-col items-center pt-[79px] gap-y-[16px]">
          <h1 className="covered-by-your-grace-regular text-[#2DA950] text-[24px] sm:text-[36px] ">
            Success stories
          </h1>
          <p className="manrope-brunel max-w-[588px] w-full text-[46px] sm:text-[56px] text-[#1C1C1C] text-center !font-semibold leading-[46px] sm:leading-[64px] tracking-[-2px] mx-auto">
            Every success journey we’ve encountered.
          </p>
        </section>
        <section className="flex flex-row w-full">
          <div className="w-[55%] h-full flex justify-end pt-[112px] pr-[90px]">
            <div className="w-fit relative">
              <div
                name="left-popup-banner"
                className="bg-[#FFFFFF] drop-shadow-xl p-[30px] h-fit rounded-[27.11px] flex flex-col gap-y-[10px] absolute top-[87px] left-[-129px]"
              >
                <div className="relative">
                  <div className="absolute top-[-38px] left-[-38px]">
                    <img src={sparkleIcon} alt="sparkle-icon" />
                  </div>
                  <div>
                    <h2
                      className="text-[#1C1C1C] text-[64px] tracking-[-3px]"
                      style={{ fontFamily: "Switzer" }}
                    >
                      40%
                    </h2>
                  </div>
                  <div>
                    <p className="font-medium text-[18px] text-[#828282] max-w-[207.82px] leading-[24px]">
                      Achieved reduction in project execution time by optimising
                      team availability
                    </p>
                  </div>
                </div>
              </div>
              <div
                name="right-popup-banner"
                className="bg-[#002E18] drop-shadow-xl p-[30px] h-fit rounded-[27.11px] flex flex-col gap-y-[10px] absolute right-[-88px] bottom-[-40px]"
              >
                <div className="">
                  <div>
                    <h2
                      className="text-[#FFFFFF] text-[63.37px] tracking-[-3px]"
                      style={{ fontFamily: "Switzer" }}
                    >
                      $0.5{" "}
                      <span className="text-[#A6A3A0] text-[22.81px] font-medium tracking-[1px]">
                        MILLION
                      </span>
                    </h2>
                  </div>
                  <div>
                    <p className="font-medium text-[18px] text-[#CCCCCC] max-w-[230.49px] leading-[24px]">
                      Reduced client expenses by saving on hiring and employee
                      costs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                name="rocket-popup-banner"
                className="bg-[#FFFFFF] drop-shadow-xl p-[16px] pr-[32px] h-fit rounded-[111.54px] absolute left-[-62px] bottom-[56px]"
              >
                <div className="flex gap-x-[14px] items-center">
                  <div>
                    <img src={rocketIcon} alt="rocket-icon" />
                  </div>
                  <div className="flex flex-col gap-y-[2px]">
                    <h3 className="text-[24px] text-[#1C1C1C] font-bold">
                      10 days
                    </h3>
                    <p className="text-[16px] text-[#828282] font-medium">
                      Staff Deployment
                    </p>
                  </div>
                </div>
              </div>
              <img src={heroImage} alt="landing-hero" />
            </div>
          </div>
          <div className="w-[45%] max-h-[659px] flex justify-end">
            <div
              className="w-full h-full pt-[180px] pl-[80px]"
              style={{
                backgroundImage: `url(${heroPatern})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
              }}
            >
              <div className="w-[420px]">
                <HeroCarousel />
              </div>
              <div>
                <Link
                  to="/registration"
                  className="bg-[#1C1C1C] hover:bg-[#4E4E4E] rounded-[100px] px-[40px] py-[31px] flex justify-center items-center w-fit gap-x-[16px] mt-[80px]"
                >
                  <span className="text-[#FFFFFF] text-[20px] font-semibold">
                    Explore more
                  </span>
                  <div>
                    <img src={arrowRightIcon} alt="explore more" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="p-[32px] mt-[160px]">
          <div className="bg-[#E8EEE7] rounded-[40px] flex w-full pl-[94px] pr-[74px] py-[80px] relative">
            <div className="w-[50%] h-[500px]">
              <div className="flex flex-col">
                <h1 className="covered-by-your-grace-regular text-[32px] text-[#9E9D9D] tracking-[-2px]">
                  What’s on your mind
                </h1>
                <h2 className="text-[#1C1C1C] text-[60px] font-semibold tracking-[-1px]">
                  Ask Questions
                </h2>
              </div>
              <div className="absolute left-[14px] bottom-[-74px]">
                <img src={faqArrowIcon} alt="arrow" />
              </div>
            </div>
            <div className="w-[50%] flex items-center pl-[30px]">
              <div className="max-w-[581px]">
                <Faq data={data} styles={styles} config={config} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
