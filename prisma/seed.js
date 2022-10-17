const { PrismaClient } = require('@prisma/client')
// const Bcrypt = require('bcrypt');

// import { links } from '../data/links

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'John',
    }
  });

  // await prisma.asset.createMany({
  //  data: dataLinks
  // });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })