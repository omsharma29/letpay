import React from 'react'
import {AppSidebar} from '../../components/sidebar'
import Example  from '../../components/barchart';
import Mastercard from '../../components/mastercardUI';
import Activity from '../../components/activity';
import DashLogs from '../../components/dashlogs';
import Greeting from '../../components/greeting';



export default function page() {
  return (
    <>
    <div  className='m-2'>
      <AppSidebar/>
    </div>
    <div  className='m-2' >
      <Example  />
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
