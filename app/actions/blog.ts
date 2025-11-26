"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  published: z.boolean().default(false),
})

export async function getPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: { id },
  })
}

export async function createPost(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    content: formData.get("content") as string,
    published: formData.get("published") === "on",
  }

  const validated = postSchema.parse(data)

  await prisma.post.create({
    data: validated,
  })

  revalidatePath("/admin/blog")
  revalidatePath("/")
  redirect("/admin/blog")
}

export async function updatePost(id: string, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    content: formData.get("content") as string,
    published: formData.get("published") === "on",
  }

  const validated = postSchema.parse(data)

  await prisma.post.update({
    where: { id },
    data: validated,
  })

  revalidatePath("/admin/blog")
  revalidatePath("/")
  redirect("/admin/blog")
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  })

  revalidatePath("/admin/blog")
  revalidatePath("/")
}
