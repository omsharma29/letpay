import { getServerSession } from "next-auth"
import { authOption } from "./lib/credential";
import Logout from "./components/logout";
import Signin from "./components/signin";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import Image from 'next/image';
import MainImage from './components/assets/MainLogo.png'
import Header from "./components/header";
import Vector1 from "./components/assets/Vector1.png"

async function Home() {

  const backgroundImageStyle = {
    backgroundImage: `url(${Vector1})`, // Get the image source
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust as needed
  };
  return (
    <div className="flex flex-col">

        <div >
      

      <div className="flex justify-center pt-3">
        <Header/>
      </div>

      <div className="flex flex-row justify-around">
        <div className="pt-[80px]">
          <h1 className="text-[54px] leading-none font-bold font-openSans">
            Secure Your Funds, <br></br>
            <span className="text-[#6359E9] font-openSans ">Simplify Your Payments!</span>
          </h1>
          <br></br>
          <p className="font-openSans">Send Money to Friends Effortlessly—With Let'sPay!</p> <br></br>
          <Link href="#">
            <Button className="text-[#6359E9] font-openSans hover:bg-[#6359E9] hover:text-white">Start Now</Button>
          </Link>
        </div>
        <div>
          <Image
            src={MainImage}
            alt="Main Image"
            width={559}
            height={531.82}
          />
        </div>
      </div>


</div>





      <div className="section2"></div>

      <div className="section3"></div>

      <div className="section4"></div>

      <div className="section5"></div>

      <div className="section6"></div>

      <div className="banner"></div>

      <div className="footer"></div>

    </div>

  )
}

export default Home