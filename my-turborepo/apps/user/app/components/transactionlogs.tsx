"use client"

import { Search } from 'lucide-react';
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";

import { usePathname, useRouter } from "next/navigation";


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

type Transaction = {
  time: Date;
  amount: number;
  status: string;
  provider: string;
};

interface TransactionLogsProps {
  transactions: Transaction[]; // Prop should be an array of Transaction
}

export default function TransactionLogs({ transactions = [] }: TransactionLogsProps) {
  console.log('Transactions received:', transactions); // Log transactions prop

  if (!transactions || !Array.isArray(transactions)) {
    console.log("Transactions prop is invalid:", transactions);
    return <div>No transactions available.</div>;
  }
  

  // Proceed with rendering the table
  const pathname = usePathname();
  const isDashboard = pathname === '/wallet/dashboard';
  const router = useRouter();

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
          {displayedTransactions.map((transaction, index) => (
            <TableRow key={index} className="border-0">
              <TableCell className="py-4">
                <div className="flex items-center gap-3">
                  <span>{transaction.provider}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-400">
                {new Date(transaction.time).toDateString()}
              </TableCell>
              <TableCell>Rs. {transaction.amount / 100}</TableCell>
              <TableCell>
                <span
                  className={
                    transaction.status === 'Success'
                      ? 'text-emerald-400'
                      : transaction.status === 'Failure'
                      ? 'text-red-400'
                      : 'text-yellow-400'
                  }
                >
                  {transaction.status}
                </span>
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
