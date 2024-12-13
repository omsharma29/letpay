"use client";

import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table";

type P2P = {
  amount: number;
  time: Date;
  Toname: string;
  Fromname: string;
  status: String
};

interface p2plogs {
  p2p: P2P[];
}

export default function P2pLogs({ p2p }: p2plogs) {
  const pathname = usePathname();
  const isDashboard = pathname === `/wallet/dashboard`;

  const displayP2P = isDashboard ? p2p.slice(0, 3) : p2p;

  return (
    <div className="w-full  p-6 bg-[#1C1B3B] rounded-3xl text-white max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full ">
      <div className="flex justify-between item-center mb-8 gap-1 md:gap-[10rem]">
        <h2 className="text-2xl font-semibold md:whitespace-nowrap">Peer Transaction</h2>
        <div className="relative flex items-center gap-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for People..."
            className="w-[280px] bg-[#252451] border pl-10"
          />
        </div>
      </div>

      <Table >
        <TableHeader>
          <TableRow className="border-0">
            <TableHead className="text-gray-400 font-medium">From</TableHead>
            <TableHead className="text-gray-400 font-medium">Amount</TableHead>
            <TableHead className="text-gray-400 font-medium">To</TableHead>
            <TableHead className="text-gray-400 font-medium">Date</TableHead>
            <TableHead className="text-gray-400 font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody >
          {displayP2P.map((t, index) => (
            <TableRow key={index}>
              <TableCell>{t.Fromname}</TableCell>
              <TableCell>Rs. {t.amount / 100}</TableCell>
              <TableCell>{t.Toname}</TableCell>
              <TableCell>{new Date(t.time).toDateString()}</TableCell>
              <TableCell><span 
              className= {
                t.status == "Recieved" ? 'text-emerald-400' : 'text-red-400'
              }>
                {t.status}
                </span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
