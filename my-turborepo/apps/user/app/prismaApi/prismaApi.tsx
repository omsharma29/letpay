import prisma from '@repo/db/client';
import { getServerSession } from "next-auth";
import { authOption } from "../lib/credential";
import React from 'react';
import TransactionLogs from '../components/transactionlogs';

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


export  async function Page() {
    const transactions = await getOnRampTransaction();

    console.log('Transactions received:', transactions);

    const transactionArray = Object.values(transactions);

    return (
        <>

            <TransactionLogs transactions={transactionArray} />
        </>
    );
}
