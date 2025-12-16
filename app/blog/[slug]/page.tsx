import { notFound } from "next/navigation"
import { getPostBySlug } from "@/app/actions/blog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

import { CopyButton } from "@/components/copy-button"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl prose-pre:border-0 prose-pre:bg-[#0d1117] prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        <div className="mb-8 text-muted-foreground">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeHighlight]}
          components={{
            pre: ({ node, children, ...props }) => {
              // Extract text content from the code block for copying
              // The children of pre is usually a code element
              // We need to traverse to find the text
              let codeText = ""
              if (node && node.children && node.children[0] && node.children[0].type === 'element' && node.children[0].tagName === 'code') {
                 const codeNode = node.children[0];
                 if (codeNode.children && codeNode.children.length > 0 && codeNode.children[0].type === 'text') {
                    codeText = codeNode.children[0].value;
                 }
              }
              
              // Fallback: try to get text from children if simple traversal failed (e.g. if rehype-highlight changed structure)
              // Note: Getting exact raw text after highlighting is tricky on server. 
              // A simpler approach for the button is to just render it and let it handle copy if we can pass text.
              // But extracting text from React children on server is hard.
              // Let's try a client component wrapper for the Pre block that handles extraction via ref or props if possible.
              // Actually, simpler: The `node` prop contains the AST. We can extract text from it recursively.
              
              const extractText = (n: any): string => {
                if (n.type === 'text') return n.value;
                if (n.children) return n.children.map(extractText).join('');
                return '';
              };
              
              const text = extractText(node);

              return (
                <div className="relative group">
                  <CopyButton text={text} className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100" />
                  <pre {...props}>{children}</pre>
                </div>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
