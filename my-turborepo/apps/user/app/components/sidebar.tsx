"use client";

import { BadgeDollarSign , LayoutDashboard, Inbox, ArrowLeftRight , Settings } from "lucide-react";
import Image from "next/image"
import logo from "./assets/Subtract.png"
import Link from "next/link";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/wallet/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transaction Logs",
    url: "/wallet/transaction",
    icon: Inbox,
  },
  {
    title: "Account",
    url: "/wallet/account",
    icon: BadgeDollarSign,
  },
  {
    title: "Transfer",
    url: "/wallet/transfer",
    icon: ArrowLeftRight ,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div
      className="h-screen min-h-screen overflow-y-auto w-fit md:p-10 pr-2 pt-2 flex flex-col gap-4 border-r
      pl-10 bg-[#1D1D41] text-white rounded-lg shadow-lg"
    >
      <div className="text-5xl py-5 pl-8" ><Image src={logo}   alt={"letspay"}      
      /></div>
      
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="flex items-center gap-4 p-2 hover:bg-[#6359E9] rounded-lg transition"
        >
          <item.icon className="w-6 h-6" />
          <span className="font-medium">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
