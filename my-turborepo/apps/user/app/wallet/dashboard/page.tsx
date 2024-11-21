import React from 'react'
import { AppSidebar } from '../../components/sidebar'
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import DashLogs from '../../components/dashlogs';
import Greeting from '../../components/greeting';
import Graph from '../../components/barchart';
import SearchBar from '../../components/searchbar';



export default function page() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center justify-evenly gap-20'>
          <div className='m-2'>
            <Greeting />
          </div>
          <div className='m-2'>
            <SearchBar />
          </div>
        </div>

        <div className='flex items-center justify-evenly'>
          <div className='m-2' >
            <Graph />
          </div>
          <div className='m-2'>
            <Mastercard />
          </div></div>

        <div className='flex items-center justify-evenly'>
          <div className='m-2'>
            <DashLogs />
          </div>
          <div className='m-2'>
            <Activity />
          </div></div>

      </div>


    </>
  )
}
