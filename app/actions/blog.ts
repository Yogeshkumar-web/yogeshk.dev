"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { z } from "zod"

import { BlogPost } from "@/types/blog"

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  published: z.boolean().default(false),
})

export async function getPosts(): Promise<BlogPost[]> {
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function getPost(id: string): Promise<BlogPost | null> {
  return await prisma.post.findUnique({
    where: { id },
  })
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await prisma.post.findFirst({
    where: { slug, published: true },
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
