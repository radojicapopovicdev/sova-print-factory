import Image from "next/image";
import React from "react";

// Assets
import HeroBg from "../assets/perspective-shot-mural.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id="hero" className="w-full h-[813.33px] flex font-heebo">
      <Image src={HeroBg} alt={""} className="h-[813.33px " ></Image>
      <p className="text-[#FFFFFF]/80 absolute text-[24px] mt-[238.67px] ml-[198.67px] ">
        Urban style
      </p>
      <p 
  className="text-[#FFFFFF] absolute text-[46px] mt-[290.67px] ml-[198.67px] w-[672.67px]"
  style={{ lineHeight: '53.33px' }}
>
  Owl Rebellion is the brand that stands against dullness
</p>

      <div
        id="button"
        className="w-[244px] h-[60px] absolute border-white border-[1.3px] ml-[198.67px] mt-[433.67px] rounded-[25.33px] 
               flex items-center justify-center text-center text-[14px] cursor-pointer "
      >
        SHOW MORE
      </div>
    </div>
  );
};

export default Hero;
