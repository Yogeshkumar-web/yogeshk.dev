"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const experienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  location: z.string().optional(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  tags: z.string(),
  logo: z.string().optional(),
  order: z.number().default(0),
})

export async function getExperiences() {
  return await prisma.experience.findMany({
    orderBy: { order: "asc" },
  })
}

export async function getExperience(id: string) {
  return await prisma.experience.findUnique({
    where: { id },
  })
}

export async function createExperience(formData: FormData) {
  const data = {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    location: formData.get("location") as string || undefined,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string || undefined,
    description: formData.get("description") as string,
    tags: formData.get("tags") as string,
    logo: formData.get("logo") as string || undefined,
    order: parseInt(formData.get("order") as string) || 0,
  }

  const validated = experienceSchema.parse(data)

  await prisma.experience.create({
    data: validated,
  })

  revalidatePath("/admin/experience")
  revalidatePath("/")
  redirect("/admin/experience")
}

export async function updateExperience(id: string, formData: FormData) {
  const data = {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    location: formData.get("location") as string || undefined,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string || undefined,
    description: formData.get("description") as string,
    tags: formData.get("tags") as string,
    logo: formData.get("logo") as string || undefined,
    order: parseInt(formData.get("order") as string) || 0,
  }

  const validated = experienceSchema.parse(data)

  await prisma.experience.update({
    where: { id },
    data: validated,
  })

  revalidatePath("/admin/experience")
  revalidatePath("/")
  redirect("/admin/experience")
}

export async function deleteExperience(id: string) {
  await prisma.experience.delete({
    where: { id },
  })

  revalidatePath("/admin/experience")
  revalidatePath("/")
}
