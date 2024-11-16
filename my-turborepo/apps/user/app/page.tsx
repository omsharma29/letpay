/* eslint-disable no-undef */
import React from 'react'
import { Button } from '@repo/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { Alert, AlertDescription, AlertTitle } from '@repo/ui/alert'
import { Terminal } from "lucide-react"


function Home() {
  return (
    <>
      <div>HomePage</div>
      <Button variant="default" size="lg">signin</Button>
      <Button variant="destructive" size="lg">signin</Button>
      <Button variant="link">signin</Button>
      <Button variant="link" >signin</Button>
      <Button variant="ghost">signin</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>


    </>
  )
}

export default Home