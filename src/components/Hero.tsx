import Image from "next/image";

// Assets
import HeroBg from "../assets/perspective-shot-mural.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id="hero" className="w-full h-[75.308vh] flex font-heebo">
      <Image src={HeroBg} alt={""} className="h-[75.308vh] "></Image>
      <p className="text-[#FFFFFF]/80 absolute text-[2.222vh] mt-[22.099vh] ml-[10.347vw] ">
        Urban style
      </p>
      <p
        className="text-[#FFFFFF] absolute text-[4.259vh] mt-[26.914vh] ml-[10.347vw] w-[35.035vw]"
        style={{ lineHeight: "4.938vh" }}
      >
        Owl Rebellion is the brand that stands against dullness
      </p>

      <div
        id="button"
        className="w-[12.708vw] h-[5.556vh] absolute border-white border-[1.33px] ml-[10.347vw] mt-[40.155vh] rounded-[25.33px] 
               flex items-center justify-center text-center text-[1.296vh] cursor-pointer "
      >
        SHOW MORE
      </div>
    </div>
  );
};

export default Hero;
