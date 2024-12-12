import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import Greeting from '../../components/greeting';
import Graph from '../../components/barchart';
import SearchBar from '../../components/searchbar';
import TransactionLogs from '../../components/Banktransactionlogs';

import {getBalance, getOnRampTransaction} from '../../prismaApi/prismaApi'



export default async function Page() {
  // Fetching transactions
  const transactions = await getOnRampTransaction();
  const balance = await getBalance()

  if (!Array.isArray(transactions)) {
    console.error('Transactions is not an array:', transactions);
    return <div>No transactions found</div>; // Fallback message if transactions is empty
  }


  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-evenly gap-[14rem] ">
          <div className="m-2">
            <Greeting />
          </div>
          <div className="m-2">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="m-2">
            <Graph />
          </div>
          <div className="m-2">
            <Mastercard balance={balance} />
          </div>
        </div>

        <div className="flex items-center justify-evenly gap-[1rem]">
          <div className="m-2">
            {/* Pass the transactions as a prop */}
            <TransactionLogs transactions={transactions} />
          </div>
          <div className="m-2">
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
