import React from "react";
import Image from "next/image";

// Assets
import logo from "../assets/logo.png";
import RArrow from "../assets/Vector Right-header.png";
import LArrow from "../assets/Vector Left-header.png";
import DArrow from "../assets/Vector 8.svg";
import Search from "../assets/search-icon.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div
      id="header"
      className="w-full bg-white h-[115px] flex items-start justify-between font-heebo text-[#E7E7E7] relative"
    >
      <div
        id="left-container"
        className="h-[36px] w-[868px] bg-[#3A383B] rounded-br-[18.67px] flex items-center z-10"
      >
        <a href="" className="text-[13px] pr-3 ml-[80px]">
          Facebook -
        </a>
        <a href="" className="text-[13px]">
          Instagram -
        </a>
        <a href="" className="text-[13px]">
          Linkedin -
        </a>
        <a href="" className="text-[13px]">
          Call Center: 0800300400
        </a>
      </div>

      <div
        id="nav-left "
        className="text-[#1A1A1A] flex absolute mt-[68px] ml-[320px]  "
      >
        <a href="" className="pr-5">
          Our Story
        </a>
        <a href="" className="pr-5">
          Services
        </a>
        <a href="" className="pr-5">
          Products
        </a>
        <a href="" className="pr-5">
          Equipment and Consumables
        </a>
      </div>

      <div
        id="logo"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[316px] h-[132px]"
      >
        <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
      </div>

      <div
        id="nav-right"
        className="flex text-[#1A1A1A] absolute mt-[68px] ml-[1152px] "
      >
        <a href="" className="pr-5">
          SPF E-Card
        </a>
        <a href="" className="pr-5">
          Blog
        </a>
        <a href="" className="pr-5">
          Contact Us
        </a>
        <a href="" className="pr-5 text-[#F36E27]">
          B2B
        </a>
      </div>

      <div
        id="search"
        className="text-[#1A1A1A] flex absolute mt-[68px] ml-[1652px] w-300px  "
      >
        <p className="text-[#1A1A1A] pl-5">EN</p>
        <Image
          src={DArrow}
          alt={"arrow-down"}
          className=" pl-2 w-[25.5px]"
        ></Image>
        <Image src={Search} alt={"search-icon"} className="ml-[40px] "></Image>
      </div>

      <div
        id="right-container"
        className="h-[36px] w-[868px] bg-[#3A383B] rounded-bl-[18.67px] z-10 flex items-center justify-center"
      >
        <Image src={LArrow} alt={"arrow-left"} className="mr-5" />
        <a href="" className="text-white">
          Special surprise gifts and free shipping on all orders above $100
        </a>
        <Image src={RArrow} alt={"arrow-right"} className="ml-5" />
      </div>
    </div>
  );
};

export default Header;
