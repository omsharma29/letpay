import prisma from '@repo/db/client';
import { getServerSession } from "next-auth";
import { authOption } from "../lib/credential";
import React from 'react';
import TransactionLogs from '../components/Banktransactionlogs';
import Mastercard from '../components/mastercardUI';
import { log } from 'console';

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

    console.log('Transactions received:', transactions);

    const transactionArray = Object.values(transactions);

    console.log("balance" , balance)

    return (
        <>
        
            <Mastercard balance={balance}/>
            <TransactionLogs transactions={transactionArray} />
        </>
    );
}
