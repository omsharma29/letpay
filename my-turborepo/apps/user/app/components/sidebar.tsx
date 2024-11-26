"use client";

import { BadgeDollarSign, LayoutDashboard, Inbox, ArrowLeftRight, Settings, PanelRightClose } from "lucide-react";
import Image from "next/image";
import logo from "./assets/Subtract.png";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useRouter, usePathname } from "next/navigation";

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
  const [isSideBar, setSideBar] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const handleItemClick = (url: string) => {
    router.push(url); // Navigate to the selected URL
    setSideBar(false); // Optionally close the sidebar after navigation
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          isSideBar ? "flex" : "hidden", // Show sidebar if `isSideBar` is true
          "lg:flex lg:static lg:h-screen lg:w-auto fixed top-0 left-0 z-40 px-5 mx-2 h-full w-64 flex-col gap-4 bg-[#1D1D41]",
          "text-white shadow-lg border-transparent transition-transform rounded-[12px]"
        )}
      >
        {/* Logo Section */}
        <div className="text-5xl py-5 pl-4">
          <Image src={logo} alt="letspay" width={isSideBar ? 80 : 50} height={isSideBar ? 80 : 50} />
        </div>

        {/* Menu Items */}
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item.url)} // Use handleItemClick on click
            className={cn(
              "flex items-center gap-4 p-2 hover:bg-[#6359E9] rounded-lg transition cursor-pointer",
              slug === item.slug && "bg-[#6359E9]" // Highlight active menu item
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="font-medium">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className={isSideBar ? "lg:hidden fixed top-[3rem] left-[15rem] z-50" : "lg:hidden fixed top-4 left-2 z-50"}>
        <button
          className="p-2 bg-[#6359E9] text-white rounded-full shadow-lg hover:bg-[#5044c8] focus:outline-none"
          onClick={() => setSideBar(!isSideBar)}
        >
          <PanelRightClose className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
