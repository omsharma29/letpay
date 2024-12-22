import Link from "next/link";
import { Button } from "@repo/ui/button";
import Image from 'next/image';
import MainLogo from './components/MainLogoAnimated'
import Header from "./components/Header";
import './main.css'
import ShowCase from "./components/ShowCase";
import { getServerSession } from "next-auth";
import Bgpng from './components/assets/bg_.png'
import Banner from "./components/banner";
import Footer from "./components/Footer";
import {InfiniteMovingCardsDemo} from "./components/Testimonials"
import DashbaordImage from "./components/DashboardAnimatedImage";
import { TransferForm } from "./components/TransferFormAnimatedImage";
import { TransactionalForm } from "./components/TransactionalLogsAnimatedImage";
import { authOption } from "./lib/credential";

async function Home() {

const session = await getServerSession(authOption)
  return (
    <div className="flex flex-col">


      {/*Header*/}
      <div className=" hidden md:flex justify-center pt-3 bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full">
        <Header />
      </div>

      {/*header for small screen*/}
      <div className="block md:hidden w-[50%] h-screen absolute  z-50 top-0 left-0">
        <Header /> {/* You can customize this header for small screens if needed */}
      </div>

      {/*Hero Section*/}
      <div className="flex md:flex-row md:justify-around flex-col items-center bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full p-6">
        <div className="md:pt-[80px] py-[20px]">
          <h1 className="text-[54px] leading-none font-bold font-openSans">
            Secure Your Funds, <br />
            <span className="text-[#6359E9] font-openSans">Simplify Your Payments!</span>
          </h1>
          <br />
          <p className="font-openSans">Send Money to Friends Effortlessly—With Let'sPay!</p> <br />
          <Link href={session ? "/wallet/dashboard" : "/api/auth/signin"}>
            <Button className="text-[#6359E9] font-openSans hover:bg-[#6359E9] hover:text-white">Start Now</Button>
          </Link>
        </div>
        <MainLogo />
      </div>



      {/*section 2*/}
      <div className="hidden md:gap-7 md:flex md:flex-rows md:relative justify-around pb-12  mt-[5rem]"> {/* Removed margin-top or adjusted as needed */}
        <div className="md:px-3">
          <ShowCase />
        </div>
        <div className="relative">
          <h1 className="font-openSans font-bold text-[40px] leading-10 relative">
            <span className="relative z-10">Make </span>
            <Image
              src={Bgpng}
              alt="Bgpng"
              width={88}
              height={91}
              className="absolute lg:bottom-[1.3rem] md:bottom-10  left-0 z-0"
            />
            & Share <span className="font-openSans font-bold text-[#6359E9] text-[40px] leading-10">Payments</span>
          </h1>
          <h1 className="font-openSans font-bold text-[40px] leading-10 pb-3">Seamlessly</h1>
          <p className="font-openSans tracking-tighter">
            Deposit funds, pay friends, and stay <br />
            connected with just an email. Simplify <br />
            your payments and strengthen your <br />
            community with Let'sPay!
          </p>
        </div>
      </div>


      <div className="bg-[#0F0E25]">
        {/*section 3*/}
        <div className="flex lg:flex-row relative lg:justify-around py-12 sm:px-10 flex-col-reverse items-center">
          <div className="relative lg:pt-[120px] pt-[50px]">
            <h1 className="font-openSans font-bold text-[40px] leading-10 relative">
              <span className="relative z-10">Daily Amount </span>
              <Image
                src={Bgpng}
                alt="Bgpng"
                width={88}
                height={91}
                className="absolute bottom-0 left-0 z-0"
              />
            </h1>
            <h1 className="font-openSans font-bold text-[#6359E9] text-[40px] leading-10 pb-3">
              Tracking
            </h1>
            <p className="font-openSans tracking-tighter">
              Stay on top of your finances with a <br />
              detailed dashboard featuring graphs <br />
              to track your spending. Easily monitor <br />
              your balance and transactions with Let'sPay
            </p>
          </div>

          <DashbaordImage />
        </div>



        {/*section 4*/}
        <div className=" flex lg:flex-row relative lg:justify-around py-12 flex-col items-center">
          <TransferForm />
          <div className="relative lg:pt-[120px] pt-[50px]">
            <h1 className="font-openSans font-bold text-[40px] leading-10 relative">
              <span className="relative z-10">Smart</span>
              <Image
                src={Bgpng}
                alt="Bgpng"
                width={88}
                height={91}
                className="absolute bottom-0 left-0 z-0"
              />
              Way of
            </h1>
            <h1 className="font-openSans font-bold text-[#6359E9] text-[40px] leading-10 pb-3">
              Payments
            </h1>
            <p className="font-openSans tracking-tighter">
              Send money instantly via email—no  <br />
              bank details needed. Fast, secure, and  <br />
              effortless payments with Let'sPay!
            </p>
          </div>
        </div>

        {/*section 5*/}
        <div className=" flex lg:flex-row relative lg:justify-around py-12 flex-col-reverse items-center">

          <div className="relative lg:pt-[120px] pt-[50px]">
            <h1 className="font-openSans font-bold text-[40px] leading-10 relative ">
              <span className="relative z-10">Records</span>
              <Image
                src={Bgpng}
                alt="Bgpng"
                width={88}
                height={91}
                className="absolute bottom-0 left-0 z-0"
              />
              of Your
            </h1>
            <h1 className="font-openSans font-bold text-[#6359E9] text-[40px] leading-10 pb-3">
              Transaction
            </h1>
            <p className="font-openSans  tracking-tighter">
              Keep track of all your payments and <br />
              deposits in one place. Let'sPay <br />
              ensures you have a clear, detailed  <br />
              record of every transaction!
            </p>
          </div>

          <TransactionalForm />

        </div>
      </div>



      <div className="bg-gradient-to-r from-custom-black to-custom-blue">
        {/*section 6 customer review*/}
        <div className="flex flex-col items-center justify-center py-12 gap-4 relative">
          <div className="relative flex items-center">
            <h1 className="font-openSans font-bold text-[40px] leading-none relative flex items-center flex-wrap ml-4">
              <span className="relative z-10 whitespace-nowrap">What Our</span>
              <Image
                src={Bgpng}
                alt="Bgpng"
                width={88}
                height={91}
                className="absolute lg:bottom-0 bottom-10 left-0 z-0"
              />
              <span className="text-[#6359E9] ml-2 whitespace-nowrap">Customer</span>
              <span className="ml-2">are Saying</span>
            </h1>
          </div>

          <div className="flex justify-center">
            <InfiniteMovingCardsDemo />
          </div>
        </div>

        {/*Banner*/}
        <div className=" hidden md:flex md:justify-center ">
          <Banner />
        </div>
      </div>


      <div className="footer py-10">
        <Footer />
      </div>

    </div>


  )
}

export default Home