import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma; // or export { PrismaClient }; if you want to import it directly
