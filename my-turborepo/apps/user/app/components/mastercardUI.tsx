"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import mastercard_logo from "./assets/mastercard_logo.png";
import Link from "next/link";

type Transaction = {
  amount: number;
  locked: number;
  username: string;
};

interface BalanceLogs {
  balance: Transaction[];
}

export default function Mastercard({ balance }: BalanceLogs) {
  const currentBalance = balance?.[0]?.amount
    ? (balance[0].amount / 100).toFixed(2)
    : "0.00";
  const username = balance?.[0]?.username?.toUpperCase() || "No User";

  return (
    <div className=" w-full md:w-[400px] md:h-[500px] sticky max-w-xl p-6 bg-[#1C1B3B] rounded-3xl flex flex-col">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold text-white">
          My Card
        </CardTitle>
        <div className="mt-2">
          <p className="text-sm text-gray-400">Card Balance</p>
          <p className="text-3xl font-bold text-white">Rs. {currentBalance}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        {/* Credit Card */}
        <div className="relative w-full h-56 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#5B45FF] p-8">
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/70">Current Balance</p>
                <p className="text-3xl font-bold text-white">Rs. {currentBalance}</p>
              </div>
              <Image
                src={mastercard_logo}
                alt="Mastercard Logo"
                width={60}
                height={38}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xl text-white tracking-wider mb-2">{username}</p>
              <p className="text-sm text-white/70">09/25</p>
            </div>
          </div>
          {/* Card gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#7B61FF]/20 to-transparent rounded-b-xl" />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-6">
          <Link href="/wallet/account">
            <Button className="w-full bg-[#7B61FF] hover:bg-[#6B51FF] text-white rounded-xl h-14 text-lg">
              Deposit
            </Button>
          </Link>
          <Link href="/wallet/transfer">
            <Button
              variant="outline"
              className="w-full border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF]/10 rounded-xl h-14 text-lg"
            >
              Transfer
            </Button>
          </Link>
        </div>
      </CardContent>
    </div>
  );
}
