import Link from "next/link";
import { Button } from "@repo/ui/button";
import Image from 'next/image';
import MainImage from './components/assets/MainLogo.png'
import Header from "./components/header";
import './main.css'
import ShowCase from "./components/ShowCase";
import Dashboard from './components/assets/Dashboard.png'
import TransactionLogsImage from './components/assets/Logs.png'
import TransferFormImage from './components/assets/TransferForm.png'
import Bgpng from './components/assets/bg_.png'
import Banner from "./components/banner";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials"

async function Home() {


  return (
    <div className="flex flex-col">


      {/*Header*/}
      <div className="flex justify-center pt-3 bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full">
        <Header />
      </div>

      {/*Hero Section*/}
      <div className="flex flex-row justify-around bg-gradient-to-r from-custom-black to-custom-blue h-74 w-full p-6">
        <div className="pt-[80px]">
          <h1 className="text-[54px] leading-none font-bold font-openSans">
            Secure Your Funds, <br />
            <span className="text-[#6359E9] font-openSans">Simplify Your Payments!</span>
          </h1>
          <br />
          <p className="font-openSans">Send Money to Friends Effortlessly—With Let'sPay!</p> <br />
          <Link href="#">
            <Button className="text-[#6359E9] font-openSans hover:bg-[#6359E9] hover:text-white">Start Now</Button>
          </Link>
        </div>
        <div>
          <Image src={MainImage} alt="Main Image" width={559} height={531.82} />
        </div>
      </div>

      {/*section 2*/}
      <div className="flex flex-rows relative justify-around pb-12 mt-[5rem]"> {/* Removed margin-top or adjusted as needed */}
        <div>
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
              className="absolute bottom-0 left-0 z-0"
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
        <div className=" flex flex-rows relative justify-around  py-12">

          <div className="relative pt-[120px]">
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
              Stay on top of your finances with a  <br />
              detailed dashboard featuring graphs  <br />
              to track your spending. Easily monitor <br />
              your balance and transactions with Let'sPay
            </p>
          </div>

          <div>
            <Image
              src={Dashboard}
              alt="Dashboard"
              width={645}
              height={446}
            />
          </div>

        </div>

        {/*section 4*/}
        <div className=" flex flex-rows relative justify-around py-12">
          <div>
            <Image
              src={TransferFormImage}
              alt="TransferFormImage"
              width={645}
              height={446}
            />
          </div>
          <div className="relative pt-[120px]">
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
        <div className=" flex flex-rows relative justify-around py-12">

          <div className="relative pt-[120px]">
            <h1 className="font-openSans font-bold text-[40px] leading-10 relative">
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

          <div>
            <Image
              src={TransactionLogsImage}
              alt="TransactionLogsImage"
              width={645}
              height={446}
            />
          </div>

        </div>

      </div>

      <div className="bg-gradient-to-r from-custom-black to-custom-blue">
        {/*section 6 customer review*/}
        <div className="flex flex-col items-center justify-center py-12 gap-4 relative">
          <div className="relative flex items-center">
            <h1 className="font-openSans font-bold text-[40px] leading-none relative flex items-center">
              <span className="relative z-10 whitespace-nowrap">What Our</span>
              <Image
                src={Bgpng}
                alt="Bgpng"
                width={88}
                height={91}
                className="absolute bottom-0 left-0 z-0"
              />
              <span className="text-[#6359E9] ml-2 whitespace-nowrap">Customer</span>
              <span className="ml-2">are Saying</span>
            </h1>
          </div>

          <div className="flex justify-center">
            <Testimonials />
          </div>
        </div>


        {/*Banner*/}
        <div className="flex justify-center">
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