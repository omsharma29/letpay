import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import TransferForm from '../../components/transferform';
import Greeting from '../../components/greeting';
import SearchBar from '../../components/searchbar';
import { getBalance } from '../../prismaApi/prismaApi';

export default async function Page() {
  const balance = await getBalance()

  return (
    <>
      <div className="flex flex-col">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex items-center justify-evenly gap-[20rem] pb-2">
          <div className="m-2">
            <Greeting />
          </div>
          <div className="m-2">
            <SearchBar />
          </div>
        </div>

        {/* Middle Section: TransferForm and Mastercard */}
        <div className="flex items-center justify-evenly">
          <div className="m-2">
            <TransferForm />
          </div>
          <div className="m-2">
            <Mastercard balance={balance} />
          </div>
        </div>

        {/* Bottom Section: Activity */}
        <div className="flex items-end justify-end">
          <div className="mx-3 px-7">
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
