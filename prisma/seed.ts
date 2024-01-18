import { PrismaClient } from '@prisma/client';
import SEED from './data.json'; // https://www.mockaroo.com/

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`)
  for (const data of SEED) {
    const { id } = await prisma.job.create({ data });
    console.log(`Created entry with id: ${id}`);
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
