import Image from 'next/image'
import React from 'react'

// Assets
import FLogo from "../assets/footer-logo.png"
import Plane from "../assets/Vector 11.svg"
import Line from "../assets/Vector 12.svg"
 
type Props = {}

const Footer = (props: Props) => {
  return (
    <div id='footer' className='w-full h-[450px] bg-[#383839] font-heebo  '>
      <Image src={FLogo} alt={''} className='absolute  ml-[78.32px] pt-[20.11px] '></Image>
      <p className='w-[392px] text-center absolute mt-[227px] ml-[74.1px]'>Book a free consultation call. Tell us what you need and we’ll find the best solution for you.</p>
      <div
          id="footer-button"
          className="absolute w-[244px] h-[51px] bg-[#369600] mt-[310px] ml-[145.11px] rounded-[25.33px] items-center justify-center text-center flex  cursor-pointer text-[14px] "
        >
          {" "}
          BOOK A CALL
        </div>
        <p className='absolute text-white text-[25px] font-bold mt-[66.08px] ml-[546.81px] '>Sing up for our Newsletter</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[138.83px] ml-[544.84px] w-[341.28px]  '>Prijavi se na nas bilten i dobices 10% popusta na sledecu kupovinu, pristup ekskluzivnim promocijama i jos mnogo toga!</p>
        <div id='input-box' className='absolute w-[368px] h-[68px] border-[1px] border-[#9F9D9E] text-left text-[#DFDFE0] text-[16.5px] rounded-[33px] items-center justify-center mt-[231px] ml-[546px]'>

          <p className='absolute ml-[20px] mt-[20px]'>Unesi svoj email</p>
          <Image src={Plane} alt={''} className='absolute ml-[300px] mt-[20px]' ></Image>
        </div>
        <p className='absolute text-[16px] text-[#DFDFE0] mt-[321px] ml-[544.84px] underline '>Zelim da otkazem pretplatu na bilten.</p>

        <p className='absolute text-white text-[25px] font-bold mt-[66.08px] ml-[1006.37px] '>Company</p>

        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[138.83px] ml-[1008.04px] w-[341.28px]  '>Corporate info</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[161.91px] ml-[1008.04px] w-[341.28px]  '>Our Story</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[184.91px] ml-[1008.04px] w-[341.28px]  '>Career</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[254.5px] ml-[1008.04px] w-[341.28px]  '>FAQ</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[208.43px] ml-[1008.04px] w-[341.28px]  '>Contact</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[231.5px] ml-[1008.04px] w-[341.28px]  '>Terms of Service</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[277.5px] ml-[1008.04px] w-[341.28px]  '>Privacy Policy</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[300.5px] ml-[1008.04px] w-[341.28px]  '>Cookie Policy</p>

        <p className='absolute text-white text-[25px] font-bold mt-[66.08px] ml-[1215.65px] '>Partner websites</p>

        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[138.83px] ml-[1218.23px] w-[341.28px]  '>owlrebellion.com</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[161.91px] ml-[1218.23px] w-[341.28px]  '>buntovnik.rs</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[184.91px] ml-[1218.23px] w-[341.28px]  '>sova.edu.rs</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[208.43px] ml-[1218.23px] w-[341.28px]  '>owlrebellion.com</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[231.5px] ml-[1218.23px] w-[341.28px]  '>buntovnik.rs</p>
        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[254.5px] ml-[1218.23px] w-[341.28px]  '>sova.edu.rs</p>

        <p className='absolute text-white text-[25px] font-bold mt-[66.08px] ml-[1496.81px] '>Latest from our blog</p>

        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[138.83px] ml-[1500.46px] w-[341.28px]  '>New in Databox: Analyze the Performance of Any Metric or KPI with Metric Insights</p>
        <p className='absolute text-[12px] text-[#DFDFE0] text-left mt-[185.24px] ml-[1500.46px] w-[341.28px]  '>April 22, 2024</p>

        <p className='absolute text-[16px] text-[#DFDFE0] text-left mt-[230.5px] ml-[1500.46px] w-[341.28px]  '>New in Databox: Analyze the Performance of Any Metric or KPI with Metric Insights</p>
        <p className='absolute text-[12px] text-[#DFDFE0] text-left mt-[276.91px] ml-[1500.46px] w-[341.28px]  '>April 22, 2024</p>

        <Image src={Line} alt={''} className='absolute mt-[399.46px] ml-[79.13px]'></Image>
        <p className='absolute mt-[416.41px] ml-[676.83px]'>2024 Sova Print Fatory | Sva prava zadrzana. Powered by Croonus Technologies</p>
    </div>
  )
}

export default Footer