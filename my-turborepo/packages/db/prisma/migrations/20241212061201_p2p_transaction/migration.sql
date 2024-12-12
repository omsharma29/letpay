/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "OnRampTransaction_userId_key";

-- CreateTable
CREATE TABLE "P2pTransaction" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "fromUserName" TEXT NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "toUserName" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "P2pTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "P2pTransaction_id_key" ON "P2pTransaction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_name_key" ON "User"("id", "name");

-- AddForeignKey
ALTER TABLE "P2pTransaction" ADD CONSTRAINT "P2pTransaction_fromUserId_fromUserName_fkey" FOREIGN KEY ("fromUserId", "fromUserName") REFERENCES "User"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2pTransaction" ADD CONSTRAINT "P2pTransaction_toUserId_toUserName_fkey" FOREIGN KEY ("toUserId", "toUserName") REFERENCES "User"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
