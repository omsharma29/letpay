"use server"

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOption } from "../credential";



export default async function createOnRampTransaction(provider : string, amount : number){
    const session = await getServerSession(authOption);
    if(!session?.user || !session.user?.id){
        return {
            message : "Unauthenticated User"
        }
    }
    const finalAmount = Math.round(amount * 100);

    console.log("Amount passed to Prisma:", finalAmount);

    
    const token = (Math.random()*1000).toString()
    await prisma.onRampTransaction.create({
        data : {
            provider : provider,
            status : "Processing",
            amount :finalAmount ,
            startTime : new Date(),
            token : token,
            user : {
                connect : { id: session.user.id },
            }
        }
    })

    return {
        message : "done"
    }
}