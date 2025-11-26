"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const techStackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  icon: z.string().min(1, "Icon is required"),
  order: z.number().default(0),
})

export async function getTechStack() {
  return await prisma.techStack.findMany({
    orderBy: { order: "asc" },
  })
}

export async function getTechStackItem(id: string) {
  return await prisma.techStack.findUnique({
    where: { id },
  })
}

export async function createTechStack(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    icon: formData.get("icon") as string,
    order: parseInt(formData.get("order") as string) || 0,
  }

  const validated = techStackSchema.parse(data)

  await prisma.techStack.create({
    data: validated,
  })

  revalidatePath("/admin/tech-stack")
  revalidatePath("/")
  redirect("/admin/tech-stack")
}

export async function updateTechStack(id: string, formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    icon: formData.get("icon") as string,
    order: parseInt(formData.get("order") as string) || 0,
  }

  const validated = techStackSchema.parse(data)

  await prisma.techStack.update({
    where: { id },
    data: validated,
  })

  revalidatePath("/admin/tech-stack")
  revalidatePath("/")
  redirect("/admin/tech-stack")
}

export async function deleteTechStack(id: string) {
  await prisma.techStack.delete({
    where: { id },
  })

  revalidatePath("/admin/tech-stack")
  revalidatePath("/")
}
