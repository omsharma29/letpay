import express from 'express';
import prisma from '@repo/db/client'

const app = express()
app.post('/hdfcwebhook', async (req, res) => {
    const paymentinfo = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentinfo.userId
                },
                data: {
                    amount: {
                        increment: paymentinfo.amount
                    }
                }
            }),
            prisma.onRampTransaction.update({
                where: {
                    token: paymentinfo.token
                },
                data: {
                    status: "Success"
                }

            })])

        res.status(200).json({
            message: "Captured"
        })
    } catch (error) {
        console.error(error);
        await prisma.onRampTransaction.update({
            where: {
                token: paymentinfo.token
            },
            data: {
                status: "Failure"
            }
        })
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

   

}) ;
app.listen(3003);