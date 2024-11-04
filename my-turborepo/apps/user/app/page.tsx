import React from 'react'
import { Button } from '@repo/ui/button'

function Home() {
  return (
    <>
    <div>HomePage</div>
    <Button  href='/api/auth/signin' >signin</Button>
    </>
  )
}

export default Home