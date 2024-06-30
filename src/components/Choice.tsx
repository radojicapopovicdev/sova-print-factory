import Image from "next/image";

import X from "../assets/choice 4.png";
import Checkmark from "../assets/choice 2.png";

type Props = {};

const Choice = (props: Props) => {
  return (
    <div className="w-full h-[92.593vh] bg-white font-heebo flex flex-col">
      <div className="flex-grow flex mt-[5.556vh] justify-center">
        <p className="text-[#000000] absolute text-[2.315vh] font-bold ">
          Choose your digital painting partner wisely
        </p>
        <p className="text-[#000000] absolute mt-[3.704vh] text-[1.528vh]">
          Always go for the uncompromising print quality, durability, and cost
          effectiveness.{" "}
        </p>
        <p className="text-[#000000] absolute mt-[6.019vh] w-[41.806vw] text-center text-[1.528vh] ">
          Rely on experienced digital printing wizards with strong business
          acumen and outstanding communication skills, who will work with you to
          solve your problems and help you achieve your goals.
        </p>
      </div>
      <div
        id="container1"
        className="absolute w-[41.806vw] h-[43.519vh] border-[0.185vh] rounded-[6.481vh] border-blue-600 ml-[4.271vw] mt-[23.611vh]  "
      >
        <p className="text-black text-[2.315vh] mt-[5.556vh] ml-[7.13vh] font-bold">
          Problems with unreliable partners
        </p>
        <p className="text-black text-[1.528vh] mt-[3.611vh] ml-[6.667vw]">
          Poor communication and imprecisely gathered requirements.
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw]">
          Poor print quality on cheap prints
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw]">
          Repeated orders caused by errors, resulting in time and money losses
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw]">
          Late deliveries
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw]">
          No positive impact and feedback from your customers
        </p>
        <div id="x">
          <Image
            src={X}
            alt={""}
            className="absolute mt-[-17.593vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={X}
            alt={""}
            className="absolute mt-[-13.889vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={X}
            alt={""}
            className="absolute mt-[-10.185vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={X}
            alt={""}
            className="absolute mt-[-6.481vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={X}
            alt={""}
            className="absolute mt-[-2.778vh] ml-[3.906vw] "
          ></Image>
        </div>
      </div>
      <div id="under1" className="absolute mt-[] ml-[8.844vw] flex ">
        <p className="text-[#5A5A5A] w-[20.946vw] mt-[76.852vh] ">
          Book a free consultation call. Tell us what you need and we’ll find
          the best solution for you.
        </p>
        <div
          id="under1-button"
          className="absolute w-[12.708vw] h-[4.722vh] bg-[#369600] mt-[76.852vh] ml-[22.396vw] rounded-[2.345vh] items-center justify-center text-center flex  cursor-pointer text-[1.296vh]  "
        >
          {" "}
          BOOK A CALL
        </div>
      </div>
      <div
        id="container2"
        className="absolute w-[44.323vw] h-[43.519vh] rounded-[6.481vh] border-blue-600 ml-[51.302vw] mt-[23.611vh]"
        style={{
          background:
            "linear-gradient(to right, #DE8EF1, #F5ADF6, #F6C6FA, #F6C6FA, #DBB0F7)",
        }}
      >
        <p className="text-black text-[2.315vh] mt-[5.556vh] ml-[4.01vw] font-bold  ">
          Solutions with Sova Print Factory
        </p>
        <p className="text-black text-[1.528vh] mt-[3.611vh] ml-[6.667vw] w-[24.301vw]  ">
          Clear, precise, and efficient communication in Serbian and English,
          resulting in precisely gathered requirements and scope
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw] w-[24.301vw] ">
          Unmatched print quality, colorful, vivid, sharp, and perfectly
          positioned, but still cost-effective
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw] w-[24.301vw] ">
          Our process eliminates errors. You’ll repeat your order only as a
          satisfied customer
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw] w-[24.301vw] ">
          We respect your time and don’t break the deadlines
        </p>
        <p className="text-black text-[1.528vh] mt-[1.481vh] ml-[6.667vw] w-[24.301vw] ">
          We respect your time and don’t break the deadlines
        </p>
        <div id="checkmarks">
          <Image
            src={Checkmark}
            alt={""}
            className="absolute mt-[-23.611vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={Checkmark}
            alt={""}
            className="absolute mt-[-17.593vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={Checkmark}
            alt={""}
            className="absolute mt-[-11.574vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={Checkmark}
            alt={""}
            className="absolute mt-[-6.019vh] ml-[3.906vw] "
          ></Image>
          <Image
            src={Checkmark}
            alt={""}
            className="absolute mt-[-2.315vh] ml-[3.906vw] "
          ></Image>
        </div>
      </div>
      <div
        className="absolute  ml-[54.08vw] border-[0.185vh] border-red-50 mt-[76.852vh] flex"
        id="under2"
      >
        <p className="text-[#5A5A5A] w-[20.946vw] ">
          If you are prepared, don’t waste time. Click and create your order. We
          have special surprise discounts and gifts for first time customers.
        </p>
        <div
          id="under2-button"
          className="absolute w-[12.708vw] h-[4.722vh] bg-[#F36F27] ml-[22.396vw] rounded-[2.345vh] items-center justify-center text-center flex cursor-pointer text-[1.296vh]   "
        >
          CREATE ORDER
        </div>
      </div>
    </div>
  );
};

export default Choice;
