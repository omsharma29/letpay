"use server";

import { getServerSession } from "next-auth";
import { authOption } from "../credential";
import prisma from "@repo/db/client";

export default async function p2pTransfer(to: string, amount: number) {
  const session = await getServerSession(authOption);

  if (!session?.user?.id) {
    throw new Error("Not authorized");
  }

  const from = session.user.id;

  const toUser = await prisma.user.findFirst({
    where: { email: to },
  });

  if (!toUser) {
    throw new Error("User not found");
  }

  await prisma.$transaction(async (tnx) => {
    const fromBalance = await tnx.balance.findUnique({
      where: { userId: Number(from) },
    });

    if (!fromBalance || fromBalance.amount < amount) {
      throw new Error("Insufficient funds");
    }



    await tnx.balance.update({
      where: { userId: Number(from) },
      data: { amount: { decrement: amount } },
    });

    await tnx.balance.update({
      where: { userId: Number(toUser.id) },
      data: { amount: { increment: amount } },
    });
  });

  return { message: "Transfer successful" };
}
