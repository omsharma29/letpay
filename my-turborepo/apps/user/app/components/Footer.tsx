import React from 'react'
import Image from 'next/image';
import Logo from './assets/trending-topic 1.png';
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
<div className="flex md:flex-row flex-col items-center gap-5 md:justify-evenly w-full h-full bg-[#141332] pt-10">
  <div className="logo flex flex-col gap-4 items-center text-center">
    <div id="logo" className="flex flex-row gap-1 items-center">
      <Image
        src={Logo}
        alt="logo"
        width={50}
        height={50}
      />
      <h1 className="font-openSans text-[40px] leading-none font-bold">Let'sPay</h1>
    </div>
    <div className="flex flex-row gap-2">
      <div><Instagram /></div>
      <div><Twitter /></div>
      <div><Linkedin /></div>
    </div>
  </div>
  <div className="service flex flex-col gap-5 items-center text-center">
    <div className="font-openSans font-bold">Services</div>
    <ul className="flex flex-col gap-2">
      <li className="font-openSans text-gray-700 font-semibold">Coding</li>
      <li className="font-openSans text-gray-700 font-semibold">Development</li>
      <li className="font-openSans text-gray-700 font-semibold">Desgining</li>
      <li className="font-openSans text-gray-700 font-semibold">Full-Stack Development</li>
      <li className="font-openSans text-gray-700 font-semibold">AI Services</li>
    </ul>
  </div>
  <div className="product flex flex-col gap-5 items-center text-center">
    <div className="font-openSans font-bold">Product</div>
    <ul className="flex flex-col gap-2">
      <li className="font-openSans text-gray-700 font-semibold">DashBoards</li>
      <li className="font-openSans text-gray-700 font-semibold">Backend</li>
      <li className="font-openSans text-gray-700 font-semibold">Micro-finance App</li>
      <li className="font-openSans text-gray-700 font-semibold">Custom Demands</li>
      <li className="font-openSans text-gray-700 font-semibold">xyz</li>
    </ul>
  </div>
</div>


    )
}
