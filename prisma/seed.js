const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main () {
  await prisma.user.create({
    data: {
      email: 'garcianaranjodairo@gmail.com',
      password: '123456',
      role: 'ADMIN'
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
