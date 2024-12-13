import prisma from '@repo/db/client';
import { getServerSession } from "next-auth";
import { authOption } from "../lib/credential";
import React from 'react';
import TransactionLogs from '../components/Banktransactionlogs';
import Mastercard from '../components/mastercardUI';
import P2pLogs from '../components/p2pTransactionLogs';

export async function getOnRampTransaction() {
    try {
        const session = await getServerSession(authOption);

        if (!session?.user?.id) {
            console.log("No session or user ID:", session);
            return [];
        }

        const userId = Number(session.user.id);

        const transactions = await prisma.onRampTransaction.findMany({
            where: {
                userId: userId,
            },
        });

        if (transactions.length === 0) {
            console.log('No transactions found');
            return [];
        }

        return transactions.map((t) => ({
            time: t.startTime,
            amount: t.amount,
            provider: t.provider,
            status: t.status,
        }));
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
}

export async function P2pTxnLogs() {
    const session = await getServerSession(authOption);
    const userId = session?.user?.id;
  
    if (!userId) {
      console.log("No user id");
      return [];
    }
  
    console.log("Current User ID:", userId);





  
    const p2p = await prisma.p2pTransaction.findMany({
      where: {
        OR : [
            {fromUserId : userId},
            {toUserId : userId}
        ]
      },
      orderBy : {
        timeStamp : 'desc'
      }
    });


    // console.log("Sent Transactions:", p2p);
    return p2p.map((t)=>({
        Fromname : t.fromUserName,
        amount : t.amount,
        Toname : t.toUserName,
        time : t.timeStamp,
        status: t.fromUserId == userId ? "Sent" : "Recieved"
    }))
  
    
  
  
  }
  
  
export async function getBalance() {
    try {
        const session = await getServerSession(authOption);

        if (!session?.user?.id) {
            console.log("No session or user ID");
            return [];
        }

        const userId = Number(session.user.id);

        const balances = await prisma.balance.findMany({
            where: {
                userId: userId, // Ensure filtering by userId
               
            },
            include: { user: true }, // Include the user relation
        });
        
        console.log("Raw Balance Data from Database:", balances);

        const result = balances.map((b) => ({
            amount: b.amount || 0,
            locked: b.locked || 0,
            username: b.user?.name || "Anonymous", // Fallback if user.name is null
        }));

        console.log("Mapped Balance Data:", result); // Log mapped data
        return result;
    } catch (error) {
        console.error("Error fetching balances:", error);
        return [];
    }
}




export  async function Page() {
    const transactions = await getOnRampTransaction();
    const balance  = await getBalance();
    const p2p = await P2pTxnLogs()

    console.log('Transactions received:', transactions);

    const transactionArray = Object.values(transactions);
    const p2pArray = Object.values(p2p);

    console.log("balance" , balance)

    return (
        <>
        
            <Mastercard balance={balance}/>
            <TransactionLogs transactions={transactionArray} />
            <P2pLogs p2p={p2pArray}/>
        </>
    );
}
