import Image from "next/image";
import React from "react";

import X from "../assets/choice 4.png"
import Checkmark from "../assets/choice 2.png"

type Props = {};

const Choice = (props: Props) => {
  return (
    <div className="w-full h-[1000px] bg-white font-heebo flex flex-col">
      <div className="flex-grow flex mt-[60px] justify-center">
        <p className="text-[#000000] absolute text-[25px] font-bold ">
          Choose your digital painting partner wisely
        </p>
        <p className="text-[#000000] absolute mt-[40px] text-[16.5px]">
          Always go for the uncompromising print quality, durability, and cost
          effectiveness.{" "}
        </p>
        <p className="text-[#000000] absolute mt-[65px] w-[802.67px] text-center text-[16.5px] ">
          Rely on experienced digital printing wizards with strong business
          acumen and outstanding communication skills, who will work with you to
          solve your problems and help you achieve your goals.
        </p>
      </div>
      <div
        id="container1"
        className="absolute w-[851px] h-[470px] border-[2px] rounded-[70px] border-blue-600 ml-[82px] mt-[255px]  "
      >
        <p className="text-black text-[25px] mt-[60px] ml-[77px] font-bold">
          Problems with unreliable partners
        </p>
        <p className="text-black text-[16.5px] mt-[39px] ml-[128px]">
          Poor communication and imprecisely gathered requirements.
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px]">
          Poor print quality on cheap prints
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px]">
          Repeated orders caused by errors, resulting in time and money losses
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px]">
          Late deliveries
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px]">
          No positive impact and feedback from your customers
        </p>
        <div id="x">
          <Image src={X} alt={""} className="absolute mt-[-190px] ml-[75px] "></Image>
          <Image src={X} alt={""} className="absolute mt-[-150px] ml-[75px] "></Image>
          <Image src={X} alt={""} className="absolute mt-[-110px] ml-[75px] "></Image>
          <Image src={X} alt={""} className="absolute mt-[-70px] ml-[75px] "></Image>
          <Image src={X} alt={""} className="absolute mt-[-30px] ml-[75px] "></Image>
        </div>
      </div>
      <div id="under1" className="absolute mt-[] ml-[169.8px] flex ">
        <p className="text-[#5A5A5A] w-[402.16px] mt-[830px] ">
          Book a free consultation call. Tell us what you need and we’ll find
          the best solution for you.
        </p>
        <div
          id="under1-button"
          className="absolute w-[244px] h-[51px] bg-[#369600] mt-[830px] ml-[430px] rounded-[25.33px] items-center justify-center text-center flex  cursor-pointer  "
        >
          {" "}
          BOOK A CALL
        </div>
      </div>
      <div
        id="container2"
        className="absolute w-[851px] h-[470px] rounded-[70px] border-blue-600 ml-[985px] mt-[255px]"
        style={{
          background:
            "linear-gradient(to right, #DE8EF1, #F5ADF6, #F6C6FA, #F6C6FA, #DBB0F7)",
        }}
      >
        <p className="text-black text-[25px] mt-[60px] ml-[77px] font-bold  ">
          Solutions with Sova Print Factory
        </p>
        <p className="text-black text-[16.5px] mt-[39px] ml-[128px] w-[466.58px]  ">
          Clear, precise, and efficient communication in Serbian and English,
          resulting in precisely gathered requirements and scope
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px] w-[466.58px] ">
          Unmatched print quality, colorful, vivid, sharp, and perfectly
          positioned, but still cost-effective
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px] w-[466.58px] ">
          Our process eliminates errors. You’ll repeat your order only as a
          satisfied customer
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px] w-[466.58px] ">
          We respect your time and don’t break the deadlines
        </p>
        <p className="text-black text-[16.5px] mt-[16px] ml-[128px] w-[466.58px] ">
          We respect your time and don’t break the deadlines
        </p>
        <div id="checkmarks">
          <Image src={Checkmark} alt={""} className="absolute mt-[-255px] ml-[75px] "></Image>
          <Image src={Checkmark} alt={""} className="absolute mt-[-190px] ml-[75px] "></Image>
          <Image src={Checkmark} alt={""} className="absolute mt-[-125px] ml-[75px] "></Image>
          <Image src={Checkmark} alt={""} className="absolute mt-[-65px] ml-[75px] "></Image>
          <Image src={Checkmark} alt={""} className="absolute mt-[-25px] ml-[75px] "></Image>
        </div>
      </div>
      <div
        className="absolute  ml-[1038.34px] border-[2px] border-red-50 mt-[830px] flex"
        id="under2"
      >
        <p className="text-[#5A5A5A] w-[402.16px] ">
          If you are prepared, don’t waste time. Click and create your order. We
          have special surprise discounts and gifts for first time customers.
        </p>
        <div
          id="under2-button"
          className="absolute w-[244px] h-[51px] bg-[#F36F27] ml-[430px] rounded-[25.33px] items-center justify-center text-center flex cursor-pointer   "
        >
          CREATE ORDER
        </div>
      </div>
    </div>
  );
};

export default Choice;
