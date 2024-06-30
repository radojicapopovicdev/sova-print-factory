"use client";
import React, { useState } from "react";
import Image from "next/image";
import sliderPic from "../assets/graphic-design-advertising-concept-large-format-plotter-close-up.jpg";

type Props = {};

const Equipment = (props: Props) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setOffset((currentOffset) => Math.min(currentOffset + 500, 0));
    } else {
      setOffset((currentOffset) => Math.max(currentOffset - 500, -1880));
    }
  };

  return (
    <div
      id="quality"
      className="w-full bg-white h-[64.815vh] flex flex-col items-center overflow-hidden relative"
    >
      <div className="flex-grow flex mt-[8.333vh] justify-center">
        <p className="text-[#000000] absolute text-[2.315vh] font-bold">
          Print quality also depends on the quality of selected products
        </p>
        <p className="text-[#000000] absolute mt-[4.167vh] w-[41.806vw] text-center text-[1.528vh]">
          Always choose the highest quality products to print. Here at Sova
          Print Factory, we don’t gamble with product quality as we know it
          impacts the end results. Small savings on cheap products might cost
          you dearly. This is why we picked only the  best quality products for
          you.
        </p>
      </div>

      <div className="flex items-center justify-between absolute w-full h-full top-0 px-2 mt-[11.111vh]">
        <button
          onClick={() => handleScroll("left")}
          className="z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full ml-[2.865vw]"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      <div id="slider" className="flex space-x-4 pb-4 w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col mt-[] ">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className="rounded-[4.537vh]  mr-[1.042vw] ml-[4.21vw] "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[8.271vw]">
              DTF Printers and Shakers
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]  "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              UV Printers
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]  "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              DTF Printing Supplies
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]  "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              UV Printing Supplies
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]  "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              Supplies
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]  "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              UV Printers
            </span>
          </div>
          <div className="min-w-[25vw] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[4.537vh] mr-[1.042vw]   "
            />
            <span className=" text-black text-[2.315vh] font-bold ml-[-0.521vw]">
              Printers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
