import React from 'react';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import DepositForm from '../../components/deposite';
import Greeting from '../../components/greeting';
import SearchBar from '../../components/searchbar';
import { getBalance, getOnRampTransaction, P2pTxnLogs } from '../../prismaApi/prismaApi';
import P2pLogs from '../../components/p2pTransactionLogs';
import TransactionLogs from '../../components/Banktransactionlogs';

export default async function Page() {
  const balance = await getBalance()
    const transactions = await getOnRampTransaction();
  
  

  return (
    <>
      <div className="flex flex-col">
        {/* Top Section: Greeting and SearchBar */}
        <div className="flex items-center justify-evenly gap-[20rem] pb-2">
          <div className="m-2 ">
            <Greeting />
          </div>
          <div className="m-2">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="m-2">
            <DepositForm />
          </div>
          <div className="m-2">
          <Mastercard balance={balance} />
          </div>
        </div>

        <div className="flex   items-center w-full mt-5 px-[6rem] ">
          <div className=" w-full max-w-full ">
            <TransactionLogs transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
}
