import React from 'react'
import {AppSidebar} from '../../components/sidebar'
import Example  from '../../components/barchart';


export default function page() {
  return (
    <>
    <div>
      <AppSidebar/>
    </div>
    <div style={{ width: '100%', height: '400px' }}>
      <Example  />
    </div>
    </>
  )
}
