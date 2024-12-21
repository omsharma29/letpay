import React from 'react';
import Image from 'next/image';
import Logo from './assets/trending-topic 1.png';
import Logout from "./logout";
import Signin from "./signin";
import { getServerSession } from "next-auth";
import { authOption } from '../lib/credential';
import Link from 'next/link'; // Import Link from Next.js

export default async function Header() {
    const session = await getServerSession(authOption);
    
    return (
        <div className='flex  flex-row justify-around items-center px-10 lg:gap-[10rem] md:gap-[7rem] bg-transparent border-0 rounded-lg shadow-none'>
     
            <div className='flex flex-row gap-1'>
                <Image
                    src={Logo}
                    alt='logo'
                    width={50} // Add width/height for better control if needed
                    height={50}
                />
                <h1 className='font-openSans text-[40px] leading-none font-bold'>Let'sPay</h1>
            </div>

            {/* Menu Section */}
            <div className='flex flex-row gap-10'>
                <Link href="/wallet/dashboard" className='font-openSans hover:underline'>Dashboard</Link>
                <Link href="/wallet/transfer" className='font-openSans hover:underline'>Transfer</Link>
                <Link href="/wallet/deposits" className='font-openSans hover:underline'>Deposits</Link>
            </div>

            {/* Sign-in / Logout */}
            <div>
                {session ? <Logout /> : <Signin />}
            </div>
        </div>
    );
}
