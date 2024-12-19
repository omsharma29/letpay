import { getServerSession } from "next-auth"
import { authOption } from "./lib/credential";
import Logout from "./components/logout";
import Signin from "./components/signin";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import Image from 'next/image';
import MainImage from './components/assets/MainLogo.png'
import Header from "./components/header";
import './main.css'
import ShowCase from "./components/ShowCase";

async function Home() {


  return (
    <div className="flex flex-col">

   

      <div className="flex justify-center pt-3 bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full">
        <Header/>
      </div>

      <div className="flex flex-row justify-around bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full">
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

<div className="divider wave1"></div>


      <div className="section2">
          <div>
            <ShowCase/>
          </div>
          <div></div>
      </div>

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