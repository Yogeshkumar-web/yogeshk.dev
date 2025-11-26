"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getMessages() {
  return await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function deleteMessage(id: string) {
  await prisma.message.delete({
    where: { id },
  })

  revalidatePath("/admin/messages")
}
