"use client";
import React, { useState } from "react";
import Image from "next/image";
import sliderPic from "../assets/textile-dyeing-factory-technical-process-manufacturing-colorful-fabrics.jpg";

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
      className="w-full bg-white h-[700px] flex flex-col items-center overflow-hidden relative"
    >
      <div className="flex-grow flex mt-[30px] justify-center">
        <p className="text-[#000000] absolute text-[25px] font-bold">
          Print quality also depends on the quality of selected products
        </p>
        <p className="text-[#000000] absolute mt-[45px] w-[802.67px] text-center text-[16.5px]">
          Always choose the highest quality products to print. Here at Sova
          Print Factory, we don’t gamble with product quality as we know it
          impacts the end results. Small savings on cheap products might cost
          you dearly. This is why we picked only the best quality products for
          you.
        </p>
      </div>

      <div className="flex items-center justify-between absolute w-full h-full top-0 px-2 mt-[120px]">
        <button
          onClick={() => handleScroll("left")}
          className="z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full ml-[55px]"
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

      <div id="slider" className="flex  space-x-4 pb-4 w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <div className="min-w-[480px] flex-shrink-0 flex flex-col ">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className="rounded-[49px]  mr-[20px] ml-[80.84px] "
            />
            <span className=" text-black text-[25px] font-bold ml-[158.8px]">
              DTF Printers and Shakers
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]  "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              UV Printers
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]  "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              DTF Printing Supplies
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]  "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              UV Printing Supplies
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]  "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              Supplies
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]  "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              UV Printers
            </span>
          </div>
          <div className="min-w-[480px] flex-shrink-0 flex flex-col items-center">
            <Image
              src={sliderPic}
              alt="Description of Image"
              width={479.85}
              height={290.22}
              className=" rounded-[49px] mr-[20px]   "
            />
            <span className=" text-black text-[25px] font-bold ml-[-10px]">
              Printers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
