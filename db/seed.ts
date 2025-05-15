import { PrismaClient } from '@prisma/client';
import { sampleData } from '@/db/sample-data';

async function main() {
  const prisma = new PrismaClient();

  await prisma.user.createMany({ data: sampleData.users });

  console.log('Database seeded successfully');
}

main();
