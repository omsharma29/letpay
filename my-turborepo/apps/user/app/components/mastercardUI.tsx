"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card"
import { Button } from "@repo/ui/button"
import Image from "next/image"
import mastercard_logo from "./assets/mastercard_logo.png"

export default function Mastercard() {
  return (
    <div className="w-full max-w-xl p-6 bg-[#1C1B3B] rounded-3xl">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold text-white">My Card</CardTitle>
        <div className="mt-2">
          <p className="text-sm text-gray-400">Card Balance</p>
          <p className="text-3xl font-bold text-white">$15,595.015</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        {/* Credit Card */}
        <div className="relative w-full h-56 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#5B45FF] p-8">
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/70">Current Balance</p>
                <p className="text-3xl font-bold text-white">$5,750.20</p>
              </div>
              <Image
                src= {mastercard_logo}
                alt="Mastercard Logo"
                width={60}
                height={38}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xl text-white tracking-wider mb-2">
                5282 3456 7890 1289
              </p>
              <p className="text-sm text-white/70">09/25</p>
            </div>
          </div>
          {/* Card gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#7B61FF]/20 to-transparent rounded-b-xl" />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-6">
          <Button 
            className="w-full bg-[#7B61FF] hover:bg-[#6B51FF] text-white rounded-xl h-14 text-lg"
          >
            Deposit
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF]/10 rounded-xl h-14 text-lg"
          >
            Transfer
          </Button>
        </div>
      </CardContent>
    </div>
  )
}