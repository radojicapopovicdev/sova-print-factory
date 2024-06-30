
import Image from "next/image";

import pic from "../assets/gym.jpg";

type Props = {};

const Services = (props: Props) => {
  return (
    <div
      id="services"
      className="w-full h-[55.556vh] flex bg-white font-heebo relative"
    >
      <div className="flex-grow flex justify-center">
        <p className="absolute text-[#000000] text-[2.315vh] font-bold">Printing Services</p>
      </div>
      <div
        id="pic1"
        className="absolute ml-[4.167vw] mt-[7.685vh] w-[44.219vw] h-[38.519vh] border-[0.185vh] font-bold rounded-[6.481vh] overflow-hidden"
      >
        <Image
          src={pic}
          layout="fill"
          objectFit="cover"
          alt="Background Image 1"
        />
      </div>
      <p className="absolute text-[#000000] text-[2.315vh] font-bold ml-[22.396vw] mt-[48.148vh] ">
        DTF printing
      </p>
      <div
        id="pic2"
        className="absolute ml-[51.25vw] mt-[7.685vh] w-[44.219vw] h-[38.519vh] border-[0.185vh] rounded-[6.481vh] overflow-hidden"
      >
        <Image
          src={pic}
          layout="fill"
          objectFit="cover"
          alt="Background Image 2"
        />
      </div>
      <p className="absolute text-[#000000] text-[2.315vh] font-bold ml-[70.313vw] mt-[48.148vh] ">
        UV printing
      </p>
    </div>
  );
};

export default Services;
