import React from 'react'
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import Greeting from '../../components/greeting';
import Graph from '../../components/barchart';
import SearchBar from '../../components/searchbar';
import TransactionLogs from '../../components/transactionlogs';



export default function page() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center justify-evenly gap-[14rem] '>
          <div className='m-2'>
            <Greeting />
          </div>
          <div className='m-2'>
            <SearchBar />
          </div>
        </div>

        <div className='flex items-center justify-evenly   '>
          <div className='m-2' >
            <Graph />
          </div>
          <div className='m-2'>
            <Mastercard />
          </div></div>

        <div className='flex items-center justify-evenly gap-[1rem]  '>
          <div className='m-2'>
            <TransactionLogs />
          </div>
          <div className='m-2'>
            <Activity />
          </div></div>

      </div>


    </>
  )
}
