import React from 'react';
import Mastercard from '../../components/mastercardUI';
import DepositForm from '../../components/Deposits';
import Greeting from '../../components/greeting';
import SearchBar from '../../components/searchbar';
import { getBalance, getOnRampTransaction } from '../../prismaApi/prismaApi';
import TransactionLogs from '../../components/Banktransactionlogs';

export default async function Page() {
  const balance = await getBalance()
  const transactions = await getOnRampTransaction();

  return (
    <>
      <div className="flex flex-col gap-4 px-4 md:px-8">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
          <div className="m-2 w-full md:w-auto">
            <Greeting />
          </div>
          <div className="m-2 hidden md:block w-full md:w-auto">
            <SearchBar />
          </div>
        </div>

        {/* Middle Section: DepositForm and Mastercard */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10 justify-evenly gap-8">
          <div className="m-2 w-full ">
            <DepositForm />
          </div>
          <div className="m-2 w-full ">
            <Mastercard balance={balance} />
          </div>
        </div>

        {/* Bottom Section: Transaction Logs */}
        <div className="flex flex-col items-center w-full mt-5">
          <div className="w-full px-2 sm:px-4 md:px-8 max-w-full">
            <TransactionLogs transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
}
