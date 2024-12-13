"use client"

import { Search } from 'lucide-react';
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";

import { usePathname, useRouter } from "next/navigation";
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
  transactions: Transaction[];
}

export default function TransactionLogs({ transactions = [] }: TransactionLogsProps) {
  console.log('Transactions received:', transactions); 

  if (!transactions || !Array.isArray(transactions)) {
    console.log("Transactions prop is invalid:", transactions);
    return <div>No transactions available.</div>;
  }

  const pathname = usePathname();
  const isDashboard = pathname === '/wallet/dashboard';
  const router = useRouter();

  const displayedTransactions = isDashboard ? transactions.slice(0, 3) : transactions;

  return (
    <div className="w-full max-w-4xl p-6 bg-[#1C1B3B] rounded-3xl text-white">
      <div className="flex items-center justify-between mb-8 gap-1 md:gap-[10rem] ">
        <h2 className="text-2xl font-semibold md:whitespace-nowrap">Bank Transaction</h2>
        <div className="relative flex items-center gap-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for Banks..."
            className="w-[280px] bg-[#252451] border-0 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-0"
          />
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
        <TableBody className="max-h-[400px] overflow-y-auto">
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
