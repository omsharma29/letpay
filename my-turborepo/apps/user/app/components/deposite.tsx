"use client";

import * as React from "react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Textarea } from "@repo/ui/textarea";

export default function DepositForm() {
  return (
    <div className="flex items-center justify-center p-4 bg-[#1a1b36] rounded-[30px]">
      <div
        className="bg-[#1a1b36] border border-gray-700 rounded-[30px] p-4 flex flex-col"
        style={{ width: "531px", height: "450px" }} // Box dimensions
      >
        <div className="space-y-1 mb-3">
          <h1 className="text-lg font-bold text-white">DEPOSIT TO WALLET</h1>
          <p className="text-xs text-gray-400">Deposit to pay whom you wish instantly</p>
        </div>
        <div className="space-y-3 flex-grow">
          {/* Amount Input */}
          <div className="space-y-1">
            <Label htmlFor="amount" className="text-white text-sm">Amount</Label>
            <Input
              id="amount"
              placeholder="$$$"
              className="bg-white text-black rounded-lg"
            />
          </div>

          {/* Payment Method Select */}
          <div className="space-y-1">
            <Label htmlFor="payment-method" className="text-white text-sm">Through (via)</Label>
            <Select defaultValue="hdfc">
              <SelectTrigger
                id="payment-method"
                className="bg-white text-black rounded-lg"
              >
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent className="bg-[#141332] text-white">
                <SelectItem value="hdfc">HDFC BANK</SelectItem>
                <SelectItem value="axis">AXIS BANK</SelectItem>
                <SelectItem value="card">CARD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Note Textarea */}
          <div className="space-y-1">
            <Label htmlFor="note" className="text-white text-sm">Note</Label>
            <Textarea
              id="note"
              placeholder="Note"
              className="bg-white text-black rounded-lg min-h-[60px]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-[#6366f1] hover:bg-[#5558e6] text-white mt-3 rounded-lg"
        >
          ADD AMOUNT
        </Button>
      </div>
    </div>
  );
}
