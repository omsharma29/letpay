"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "./assets/trending-topic 1.png";
import Logout from "./logout";
import Signin from "./signin";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { StretchHorizontal, X } from 'lucide-react'
import { Button } from "@repo/ui/button";

export default function Header() {
    const { data: session } = useSession(); // Get session data on the client side
    const [isSidebar , setSidebar] = useState(false)

    const handlclick = ()=>{
            setSidebar(!isSidebar)
    }

    return (
        <>
            <div className={`hidden md:flex flex-row justify-around items-center px-10 lg:gap-[10rem] md:gap-[7rem] bg-transparent border-0 rounded-lg shadow-none md:px-10`}>
                {/* Logo Section */}
                <div className="flex flex-row gap-1">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="font-openSans text-[40px] leading-none font-bold">Let'sPay</h1>
                </div>

                {/* Menu Section */}
                <div className="flex flex-row gap-10">
                    <Link href="/wallet/dashboard" className="font-openSans hover:underline">
                        Dashboard
                    </Link>
                    <Link href="/wallet/transfer" className="font-openSans hover:underline">
                        Transfer
                    </Link>
                    <Link href="/wallet/account" className="font-openSans hover:underline">
                        Deposits
                    </Link>
                </div>

                {/* Sign-in / Logout */}
                <div>{session ? <Logout /> : <Signin />}</div>
            </div>

            {/*small screen*/}
            <div className={`block ${isSidebar ? "block" : "hidden"} md:hidden w-full h-full bg-custom-black`}>
                <div className="icon flex justify-end pr-3 py-3">
                    <X onClick={handlclick} />
                </div>
                <div className="sidebar flex flex-col mx-4 gap-5">
                    <div className="logo flex flex-row gap-1">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-openSans text-[30px] leading-none font-bold">Let'sPay</h1>
                    </div>
                    <div className="links flex flex-col gap-2">
                        <Link href="/wallet/dashboard">
                            <Button className="font-openSans hover:underline bg-custom-black border border-[#6359E9] active:bg-[#6359E9] hover:bg-[#6359E9] text-[#6359E9] active:text-white hover:text-white px-6 py-3">
                                Dashboard
                            </Button>
                        </Link>
                        <Link href="/wallet/transfer">
                            <Button className="font-openSans hover:underline bg-custom-black border border-[#6359E9] active:bg-[#6359E9] hover:bg-[#6359E9] text-[#6359E9] active:text-white hover:text-white px-6 py-3">
                                Transfer
                            </Button>
                        </Link>
                        <Link href="/wallet/account">
                            <Button className="font-openSans hover:underline bg-custom-black border border-[#6359E9] active:bg-[#6359E9] hover:bg-[#6359E9] text-[#6359E9] active:text-white hover:text-white px-6 py-3">
                                Deposits
                            </Button>
                        </Link>
                    </div>



                    <div>{session ? <Logout /> : <Signin />}</div>
                </div>
            </div>
            <div className="block md:hidden mx-4 my-2">
                <StretchHorizontal onClick={handlclick}  />
            </div>

        </>
    );
}
