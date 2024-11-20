import React from 'react'
import Mastercard from '../../components/mastercardUI'
import Activity from '../../components/activity'
import Greeting from '../../components/greeting'

export default function page() {
  return (
    <>
       <div  className='m-2'>
      <Mastercard/>
    </div>
    <div className='m-2'>
      <Activity/>
    </div>
<div className='m-2'>
      <Greeting />
    </div>
    </>
  )
}
