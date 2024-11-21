"use client";

import { BadgeDollarSign, LayoutDashboard, Inbox, ArrowLeftRight, Settings, ArrowLeftToLine } from "lucide-react";
import Image from "next/image";
import logo from "./assets/Subtract.png";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/wallet/dashboard",
    icon: LayoutDashboard,
    slug: "dashboard",
  },
  {
    title: "Transaction Logs",
    url: "/wallet/transaction",
    icon: Inbox,
    slug: "transaction",
  },
  {
    title: "Account",
    url: "/wallet/account",
    icon: BadgeDollarSign,
    slug: "account",
  },
  {
    title: "Transfer",
    url: "/wallet/transfer",
    icon: ArrowLeftRight,
    slug: "transfer",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    slug: "#",
  },
];

export function AppSidebar() {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const router = usePathname()
  const slug = router.split('/').pop()

  return (
<div
  className={cn(
    "h-screen sticky top-0 left-0 flex flex-col gap-4 border-r pl-10 bg-[#1D1D41] text-white shadow-lg",
    
  )}
>
      <div className="text-5xl py-5 pl-8">
        <Image src={logo} alt={"letspay"} />
      </div>

      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          // onClick={() => setActiveItem(index)} // Update active item on click
          className={cn(
            "flex items-center gap-4 p-2 hover:bg-[#6359E9] rounded-lg transition",
            slug === item.slug && "bg-[#6359E9]" // Add active background
          )}
        >
          <item.icon className="w-6 h-6" />
          {isSideBarOpen && <span className="font-medium">{item.title}</span>}
        </Link>
      ))}


      <ArrowLeftToLine
        onClick={() => setSideBarOpen(!isSideBarOpen)}
        className={cn(
          "hover:bg-[#6359E9] rounded-lg transition",
          !isSideBarOpen && "rotate-180"
        )}
      />
    </div>
  );
} 




