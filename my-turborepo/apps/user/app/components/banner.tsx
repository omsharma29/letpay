import { Button } from '@repo/ui/button'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOption } from '../lib/credential';

export default async function Banner() {
    const session = await getServerSession(authOption)
  return (
    <div className="banner w-[1101px] h-[182] bg-[#0B0A20] flex flex-rows items-center justify-center gap-5 m-8 ">
    <h1 className="text-[40px] font-openSans font-bold">What Are You
      <span className='text-[#6359E9]'> Waiting For? </span>
      </h1>
      <Link href={session? "/wallet/dashboard" : "/api/auth/signin"}>
      <Button className={`${session ? "bg-[#6359E9]" : "bg-yellow-300"} px-8 py-4`}
      >Try Let'sPlay</Button>
      </Link>
  </div>
  )
}
