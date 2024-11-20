import React from 'react'
import {AppSidebar} from '../../components/sidebar'
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import DashLogs from '../../components/dashlogs';
import Greeting from '../../components/greeting';
import Graph from '../../components/barchart';



export default function page() {
  return (
    <>

    <div  className='m-2' >
      <Graph  />
    </div>
    <div  className='m-2'>
      <Mastercard/>
    </div>
    <div className='m-2'>
      <Activity/>
    </div>
    <div className='m-2'>
      <DashLogs />
    </div>
    <div className='m-2'>
      <Greeting />
    </div>
    </>
  )
}
