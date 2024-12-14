import React from 'react';
import Mastercard from '../../components/mastercardUI';
import TransferForm from '../../components/transferform';
import Greeting from '../../components/greeting';
import SearchBar from '../../components/searchbar';
import { getBalance, P2pTxnLogs } from '../../prismaApi/prismaApi';
import P2pLogs from '../../components/p2pTransactionLogs';

export default async function Page() {
  const balance = await getBalance()
  const p2plogs = await P2pTxnLogs()
  

  return (
    <>
      <div className="flex flex-col  gap-4 px-4 md:px-8">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex items-center justify-evenly gap-[20rem] pb-2">
          <div className="m-2 w-full md:w-auto">
            <Greeting />
          </div>
          <div className="m-2 hidden md:block">
            <SearchBar />
          </div>
        </div>

        {/* Middle Section: TransferForm and Mastercard */}
        <div className="flex items-center flex-col md:flex-row md:space-x-16 justify-evenly">
          <div className="m-2 w-full">
            <TransferForm />
          </div>
          <div className="m-2 w-full">
            <Mastercard balance={balance} />
          </div>
        </div>

        {/* Bottom Section: P2P Logs */}
        <div className="flex justify-center w-full mt-5 pb-5">
          <div className="w-full max-w-full px-4">
            <P2pLogs p2p={p2plogs} />
          </div>
        </div>
      </div>
    </>
  );
}
