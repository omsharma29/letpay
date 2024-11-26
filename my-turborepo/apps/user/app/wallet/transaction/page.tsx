import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import Greeting from '../../components/greeting';
import TransactionLogs from '../../components/transactionlogs';
import SearchBar from '../../components/searchbar';

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2">
          <div className="m-2 w-full md:w-auto">
            <Greeting />
          </div>
          <div className="m-2 w-full md:w-auto">
            <SearchBar />
          </div>
        </div>

        {/* Middle Section: TransactionLogs and Mastercard */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="m-2 w-full md:w-auto">
            <TransactionLogs />
          </div>
          <div className="m-2 w-full md:w-auto">
            <Mastercard />
          </div>
        </div>

        {/* Bottom Section: Activity */}
        <div className="flex items-end justify-end mt-6">
          <div className="mx-3 px-7 w-full md:w-auto">
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
