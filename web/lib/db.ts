import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { env } from './env'

const connectionString = env.DATABASE_URL

const adapter = new PrismaNeon({ connectionString })

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: env.isDevelopment ? ['error', 'warn'] : ['error'],
  })

if (env.isDevelopment) globalForPrisma.prisma = prisma

export default prisma







