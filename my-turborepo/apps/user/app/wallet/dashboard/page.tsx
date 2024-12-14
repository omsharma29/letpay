import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import Greeting from '../../components/greeting';
import Graph from '../../components/barchart';
import SearchBar from '../../components/searchbar';
import TransactionLogs from '../../components/Banktransactionlogs';

import { getBalance, getOnRampTransaction } from '../../prismaApi/prismaApi';

export default async function Page() {
  // Fetching transactions
  const transactions = await getOnRampTransaction();
  const balance = await getBalance();

  if (!Array.isArray(transactions)) {
    console.error('Transactions is not an array:', transactions);
    return <div>No transactions found</div>; // Fallback message if transactions is empty
  }

  return (
    <>
      <div className="flex flex-col px-4">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-8">
          <div className="m-2">
            <Greeting />
          </div>
          <div className="m-2 hidden md:block"> {/* Hide SearchBar on medium screens */}
            <SearchBar />
          </div>
        </div>

        {/* Middle Section: Graph and Mastercard */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
          <div className="m-2 w-full ">
            <Graph />
          </div>
          <div className="m-2 w-full ">
            <Mastercard balance={balance} />
          </div>
        </div>


        {/* Bottom Section: Transaction Logs and Activity */}
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-8 mt-4">
          <div className="m-2 w-full md:w-3/4">
            <TransactionLogs transactions={transactions} />
          </div>
          <div className="m-2 hidden md:block"> {/* Hide Activity on medium screens */}
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
