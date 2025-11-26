"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.string(),
  demoUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  imageUrl: z.string().optional(),
  featured: z.boolean().default(false),
})

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function getProject(id: string) {
  return await prisma.project.findUnique({
    where: { id },
  })
}

export async function createProject(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    tags: formData.get("tags") as string,
    demoUrl: formData.get("demoUrl") as string || undefined,
    repoUrl: formData.get("repoUrl") as string || undefined,
    imageUrl: formData.get("imageUrl") as string || undefined,
    featured: formData.get("featured") === "on",
  }

  const validated = projectSchema.parse(data)

  await prisma.project.create({
    data: validated,
  })

  revalidatePath("/admin/projects")
  revalidatePath("/")
  redirect("/admin/projects")
}

export async function updateProject(id: string, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    tags: formData.get("tags") as string,
    demoUrl: formData.get("demoUrl") as string || undefined,
    repoUrl: formData.get("repoUrl") as string || undefined,
    imageUrl: formData.get("imageUrl") as string || undefined,
    featured: formData.get("featured") === "on",
  }

  const validated = projectSchema.parse(data)

  await prisma.project.update({
    where: { id },
    data: validated,
  })

  revalidatePath("/admin/projects")
  revalidatePath("/")
  redirect("/admin/projects")
}

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  })

  revalidatePath("/admin/projects")
  revalidatePath("/")
}
