import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
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

        {/* Bottom Section: P2P Logs */}
        <div className="flex justify-center w-full mt-5">
          <div className="w-full max-w-full px-4">
            <P2pLogs p2p={p2plogs} />
          </div>
        </div>
      </div>
    </>
  );
}
