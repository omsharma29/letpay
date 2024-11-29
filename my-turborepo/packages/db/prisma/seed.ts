import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('securepassword', 10); // Hash the password
    const alice = await prisma.user.upsert({
        where: { email: 'alice@yahoo.com' },
        update: {},
        create: {
            email: 'alice@yahoo.com',
            name: 'Alice',
            auth_type: 'Email',
            password: hashedPassword,

            
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },

            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "token__1",
                    provider: "HDFC Bank",
                }
            }
        }
    });

    const bob = await prisma.user.upsert({
        where: { email: 'bob@yahoo.com' },
        update: {},
        create: {
            email: 'bob@yahoo.com',
            name: 'bob',
            auth_type: 'Email',
            password: hashedPassword,


            Balance: {
                create: {
                    amount: 2000,
                    locked: 0
                }
            },

            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 2000,
                    token: "token__2",
                    provider: "HDFC Bank",
                }
            }
        }
    })

    console.log({alice, bob });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
