import React, { useState } from 'react'
import ReactSimplyCarousel from "react-simply-carousel";


const HeroCarousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReactSimplyCarousel
                  activeSlideIndex={activeSlideIndex}
                  onRequestChange={setActiveSlideIndex}
                  centerMode={true}
                  itemsToShow={1}
                  itemsToScroll={1}
                  autoplayDelay={4000}
                  autoplay={true}
                  dotsNav={{
                    show: true,
                    containerProps: {
                      style: {
                        display: "flex",
                        columnGap: "12px",
                        justifyContent: "flex-start",
                        width: "100%",
                        marginTop: "55px",
                      },
                    },
                    itemBtnProps: {
                      style: {
                        height: "10.75px",
                        width: "10.75px",
                        borderRadius: "50%",
                        border: 0,
                        background: "#E4E3E3",
                      }
                    },
                    activeItemBtnProps: {
                      style: {
                        height: "10.75px",
                        width: "10.75px",
                        borderRadius: "50%",
                        border: 0,
                        background: "#2DA950",
                      },
                    },
                  }}
                  responsiveProps={[
                    {
                      itemsToShow: 1,
                      itemsToScroll: 1,
                      minWidth: 768,
                    },
                  ]}
                  speed={400}
                  easing="linear"
                >
                  {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                  <div
                    style={{ width: 420 }}
                  >
                    <p className="text-[40px] text-[#1C1C1C] font-semibold tracking-[-2px]">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                  <div
                    style={{ width: 420 }}
                  >
                    <p className="text-[40px] text-[#1C1C1C] font-semibold tracking-[-2px]">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                  <div
                    style={{ width: 420 }}
                  >
                    <p className="text-[40px] text-[#1C1C1C] font-semibold tracking-[-2px]">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                </ReactSimplyCarousel>
  )
}

export default HeroCarousel