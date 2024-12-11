"use client";

import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { useState } from "react";
import p2pTransfer from "../lib/action/p2pTransfer";

export default function TransferForm() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await p2pTransfer(email, Number(amount) * 100);
      setMessage(response.message || "Transfer successful!");
    } catch (error: any) {
      setMessage(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center p-4 bg-[#1C1B3B] rounded-[30px]">
      <div
        className="bg-[#1C1B3B] border border-gray-700 rounded-[30px] p-4 flex flex-col"
        style={{ width: "531px", height: "320px" }}
      >
        <div className="space-y-1 mb-3">
          <h1 className="text-lg font-bold text-white">PAYMENT</h1>
          <p className="text-xs text-gray-400">Pay to whom you wish</p>
        </div>
        <div className="space-y-3 flex-grow">
          {/* Recipient Email */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">To</label>
            <Input
              type="text"
              placeholder="Recipient's Email"
              className="bg-white text-gray-900 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Amount */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">Amount</label>
            <Input
              type="text"
              placeholder="$$$"
              className="bg-white text-gray-900 rounded-lg"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-[#7B61FF] hover:bg-[#6B51FF] h-12 rounded-lg mt-4"
          onClick={handleClick}
        >
          PAY NOW
        </Button>

        {/* Display Message */}
        {message && (
          <p className="text-sm mt-3 text-center text-white bg-gray-800 p-2 rounded-lg">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
