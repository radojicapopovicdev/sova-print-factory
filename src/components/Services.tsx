
import Image from "next/image";

import pic from "../assets/gym.jpg";

type Props = {};

const Services = (props: Props) => {
  return (
    <div
      id="services"
      className="w-full h-[600px] flex bg-white font-heebo relative"
    >
      <div className="flex-grow flex justify-center">
        <p className="absolute text-[#000000] text-[25px]">Printing Services</p>
      </div>
      <div
        id="pic1"
        className="absolute ml-[80px] mt-[83px] w-[849px] h-[416px] border-[2px] font-bold rounded-[70px] overflow-hidden"
      >
        <Image
          src={pic}
          layout="fill"
          objectFit="cover"
          alt="Background Image 1"
        />
      </div>
      <p className="absolute text-[#000000] text-[25px] font-bold ml-[430px] mt-[520px] ">
        DTF printing
      </p>
      <div
        id="pic2"
        className="absolute ml-[984px] mt-[83px] w-[849px] h-[416px] border-[2px] rounded-[70px] overflow-hidden"
      >
        <Image
          src={pic}
          layout="fill"
          objectFit="cover"
          alt="Background Image 2"
        />
      </div>
      <p className="absolute text-[#000000] text-[25px] font-bold ml-[1350px] mt-[520px] ">
        UV printing
      </p>
    </div>
  );
};

export default Services;
