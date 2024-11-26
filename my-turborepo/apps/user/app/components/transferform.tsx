"use client";

import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";
import { Search } from "lucide-react";

export default function TransferForm() {
  return (
    <div className="flex items-center justify-center p-4 bg-[#1C1B3B] rounded-[30px]">
      <div
        className="bg-[#1C1B3B] border border-gray-700 rounded-[30px] p-4 flex flex-col"
        style={{ width: "531px", height: "500px" }} // Adjusted height
      >
        <div className="space-y-1 mb-3">
          <h1 className="text-lg font-bold text-white">PAYMENT</h1>
          <p className="text-xs text-gray-400">Pay to whom you wish</p>
        </div>
        <div className="space-y-3 flex-grow">
          {/* Recipient Search */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">To</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for recipient..."
                className="w-full bg-white pl-10 text-gray-900 rounded-lg"
              />
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">Amount</label>
            <Input
              type="text"
              placeholder="$$$"
              className="bg-white text-gray-900 rounded-lg"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">Through (via)</label>
            <Select>
              <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg">
                <SelectValue placeholder="wallet" />
              </SelectTrigger>
              <SelectContent className="bg-[#141332] text-white">
                <SelectItem value="card">CARD</SelectItem>
                <SelectItem value="bank">BANK TRANSFER</SelectItem>
                <SelectItem value="wallet">WALLET</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Note */}
          <div className="space-y-1">
            <label className="text-sm text-gray-400">Note</label>
            <Textarea
              placeholder="Note"
              className="min-h-[60px] bg-white text-gray-900 rounded-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-[#7B61FF] hover:bg-[#6B51FF] h-12 rounded-lg mt-4">
          PAY NOW
        </Button>
      </div>
    </div>
  );
}
