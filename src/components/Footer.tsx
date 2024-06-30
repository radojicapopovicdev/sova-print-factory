import Image from 'next/image'
import React from 'react'

// Assets
import FLogo from "../assets/footer-logo.png"
import Plane from "../assets/Vector 11.svg"
import Line from "../assets/Vector 12.svg"
 
type Props = {}

const Footer = (props: Props) => {
  return (
    <div id='footer' className='w-full h-[41.667vh] bg-[#383839] font-heebo  '>
      <Image src={FLogo} alt={''} className='absolute  ml-[4.079vw] pt-[1.862vh] '></Image>
      <p className='w-[20.417vw] text-center absolute mt-[21.019vh] ml-[3.859vw]'>Book a free consultation call. Tell us what you need and we’ll find the best solution for you.</p>
      <div
          id="footer-button"
          className="absolute w-[12.708vw] h-[4.722vh] bg-[#369600] mt-[28.704vh] ml-[7.558vw] rounded-[2.345vh] items-center justify-center text-center flex  cursor-pointer text-[1.296vh] "
        >
          {" "}
          BOOK A CALL
        </div>
        <p className='absolute text-white text-[2.315vh] font-bold mt-[6.119vh] ml-[28.48vw] '>Sing up for our Newsletter</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[12.855vh] ml-[28.377vw] w-[17.775vw]  '>Prijavi se na nas bilten i dobices 10% popusta na sledecu kupovinu, pristup ekskluzivnim promocijama i jos mnogo toga!</p>
        <div id='input-box' className='absolute w-[19.167vw] h-[6.296vh] border-[0.093vh] border-[#9F9D9E] text-left text-[#DFDFE0] text-[1.528vh] rounded-[3.056vh] items-center justify-center mt-[21.389vh] ml-[28.438vw]'>

          <p className='absolute ml-[1.042vw] mt-[1.852vh]'>Unesi svoj email</p>
          <Image src={Plane} alt={''} className='absolute ml-[15.625vw] mt-[1.852vh]' ></Image>
        </div>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] mt-[29.722vh] ml-[28.377vw] underline '>Zelim da otkazem pretplatu na bilten.</p>

        <p className='absolute text-white text-[2.315vh] font-bold mt-[6.119vh] ml-[52.415vw] '>Company</p>

        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[12.855vh] ml-[52.502vw] w-[17.775vw]  '>Corporate info</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[14.992vh] ml-[52.502vw] w-[17.775vw]  '>Our Story</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[17.121vh] ml-[52.502vw] w-[17.775vw]  '>Career</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[23.565vh] ml-[52.502vw] w-[17.775vw]  '>FAQ</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[19.299vh] ml-[52.502vw] w-[17.775vw]  '>Contact</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[21.435vh] ml-[52.502vw] w-[17.775vw]  '>Terms of Service</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[25.694vh] ml-[52.502vw] w-[17.775vw]  '>Privacy Policy</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[27.824vh] ml-[52.502vw] w-[17.775vw]  '>Cookie Policy</p>

        <p className='absolute text-white text-[2.315vh] font-bold mt-[6.119vh] ml-[63.315vw] '>Partner websites</p>

        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[12.855vh] ml-[63.449vw] w-[17.775vw]  '>owlrebellion.com</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[14.992vh] ml-[63.449vw] w-[17.775vw]  '>buntovnik.rs</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[17.121vh] ml-[63.449vw] w-[17.775vw]  '>sova.edu.rs</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[19.299vh] ml-[63.449vw] w-[17.775vw]  '>owlrebellion.com</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[21.435vh] ml-[63.449vw] w-[17.775vw]  '>buntovnik.rs</p>
        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[23.565vh] ml-[63.449vw] w-[17.775vw]  '>sova.edu.rs</p>

        <p className='absolute text-white text-[2.315vh] font-bold mt-[6.119vh] ml-[77.959vw] '>Latest from our blog</p>

        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[12.855vh] ml-[78.149vw] w-[17.775vw]  '>New in Databox: Analyze the Performance of Any Metric or KPI with Metric Insights</p>
        <p className='absolute text-[1.111vh] text-[#DFDFE0] text-left mt-[17.152vh] ml-[78.149vw] w-[17.775vw]  '>April 22, 2024</p>

        <p className='absolute text-[1.481vh] text-[#DFDFE0] text-left mt-[21.343vh] ml-[78.149vw] w-[17.775vw]  '>New in Databox: Analyze the Performance of Any Metric or KPI with Metric Insights</p>
        <p className='absolute text-[1.111vh] text-[#DFDFE0] text-left mt-[25.64vh] ml-[78.149vw] w-[17.775vw]  '>April 22, 2024</p>

        <Image src={Line} alt={''} className='absolute mt-[36.987vh] ml-[4.121vw]'></Image>
        <p className='absolute mt-[38.556vh] ml-[35.252vw]'>2024 Sova Print Fatory | Sva prava zadrzana. Powered by Croonus Technologies</p>
    </div>
  )
}

export default Footer