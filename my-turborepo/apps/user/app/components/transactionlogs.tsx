"use client"

import { Search } from 'lucide-react';
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import McDonald from "./assets/McDonald`s.png";
import Levis from "./assets/image 4.png";
import Adobe from "./assets/Adobe After Effects.png";
import { usePathname , useRouter } from "next/navigation";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table";

export default function TransactionLogs() {
  const pathname = usePathname();
  const isDashboard = pathname === '/wallet/dashboard';  // Check if we're on the dashboard
  const router = useRouter()

  const transactions = [
    {
      id: 1,
      name: 'Adobe After Effect',
      date: 'Sat, 20 Apr 2020',
      amount: '$80.09',
      status: 'Deposited',
      image: Adobe,
    },
    {
      id: 2,
      name: 'Levis',
      date: 'Fri, 19 Apr 2020',
      amount: '$7.03',
      status: 'Deposited',
      image: Levis,
    },
    {
      id: 3,
      name: 'Macdonald',
      date: 'Tue, 19 Apr 2020',
      amount: '$30.09',
      status: 'Deposited',
      image: McDonald,
    },
    {
      id: 4,
      name: 'Macdonald',
      date: 'Tue, 19 Apr 2020',
      amount: '$30.09',
      status: 'Deposited',
      image: McDonald,
    },
    {
      id: 5,
      name: 'Macdonald',
      date: 'Tue, 19 Apr 2020',
      amount: '$30.09',
      status: 'Deposited',
      image: McDonald,
    },
    // Add more transactions if needed
  ];

  // Only show the last 3 transactions if we're on the dashboard route
  const displayedTransactions = isDashboard ? transactions.slice(0, 3) : transactions;

  return (
    <div className="w-full max-w-4xl p-6 bg-[#1C1B3B] rounded-3xl text-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Transaction</h2>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search for anything..." 
              className="w-[280px] bg-[#252451] border-0 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-0"
            />
          </div>
          <Select defaultValue="date-range">
            <SelectTrigger className="w-[180px] bg-[#252451] border-0 text-white focus:ring-0">
              <SelectValue>10 May - 20 May</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#252451] border-[#252451] text-white">
              <SelectItem value="date-range">10 May - 20 May</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-0">
            <TableHead className="text-gray-400 font-medium">Name</TableHead>
            <TableHead className="text-gray-400 font-medium">Date</TableHead>
            <TableHead className="text-gray-400 font-medium">Amount</TableHead>
            <TableHead className="text-gray-400 font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedTransactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-0">
              <TableCell className="py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#252451] flex items-center justify-center">
                    <Image
                      src={transaction.image}
                      alt={transaction.name}
                      width={60}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <span>{transaction.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-400">{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <span className="text-emerald-400">Paid</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isDashboard && (
        <div className="mt-4 text-center">
          <Button
            onClick={() => router.push('/wallet/transaction')}
            className="bg-[#7B61FF] hover:bg-[#6B51FF] px-6 py-2 rounded-lg"
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
}
