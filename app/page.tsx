import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { GitHubOverview } from "@/components/sections/github-overview"
import { BlogSection } from "@/components/sections/blog-section"

// Dummy data - will be replaced with database queries
const dummyProjects = [
  {
    id: "1",
    title: "React Wheel Picker",
    description: "iOS like wheel picker for React with smooth inertia scrolling and infinite loop support. Backed by Vercel OSS Program.",
    imageUrl: "",
    tags: "React, TypeScript, Workspace, Turborepo, NPM Registry, GitHub Actions",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.",
    imageUrl: "",
    tags: "Next.js, TypeScript, Tailwind CSS, Prisma",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
]

const dummyExperiences = [
  {
    id: "1",
    company: "Simplamo Enterprise JSC",
    role: "Senior Frontend Developer",
    location: "Full-time",
    startDate: "10-2022",
    endDate: "∞",
    description: `• Develop AI Chat and AI Assistant features.
• Develop Whiteboard with real-time collaboration.
• Build and maintain the Zalo Mini App for Simplamo with seamless integration.
• Develop interactive chart and analytics widgets for the dashboard to enhance data visualization.
• Develop and maintain core features to enhance functionality and user experience.
• Ensure UI/UX consistency and adherence to standards.
• Implement robust frontend solutions for web and mobile platforms.
• Analyze technical capabilities and provide optimal solutions.`,
    tags: "TypeScript, React.js, React Native, Node, React State, Java, Tailwind CSS, Odin, Zalo Mini App, Apollo, teamwork, Webpack, Vite.js, activity",
    logo: "",
  },
  {
    id: "2",
    company: "Quaric Co., Ltd.",
    role: "Design Engineer",
    location: "Part-time",
    startDate: "03-2024",
    endDate: "∞",
    description: `• Created Quaric Brand Identity.
• Created the Quaric Design System to standardize design practices and accelerate development.
• Developed online ordering to streamline purchases.
• Integrated VNPAY-QR for secure transactions.
• Registered the e-commerce site with online.gov.vn for compliance.`,
    tags: "Design, Branding, UI/UX",
    logo: "",
  },
]

const dummyTechStack = [
  { id: "1", name: "TypeScript", category: "Languages", icon: "📘" },
  { id: "2", name: "JavaScript", category: "Languages", icon: "📜" },
  { id: "3", name: "Python", category: "Languages", icon: "🐍" },
  { id: "4", name: "React", category: "Frontend", icon: "⚛️" },
  { id: "5", name: "Next.js", category: "Frontend", icon: "▲" },
  { id: "6", name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  { id: "7", name: "Node.js", category: "Backend", icon: "🟢" },
  { id: "8", name: "Prisma", category: "Backend", icon: "🔷" },
  { id: "9", name: "PostgreSQL", category: "Backend", icon: "🐘" },
  { id: "10", name: "Git", category: "Tools", icon: "🔧" },
  { id: "11", name: "Docker", category: "Tools", icon: "🐳" },
  { id: "12", name: "VS Code", category: "Tools", icon: "💻" },
]

const dummyPosts = [
  {
    id: "1",
    title: "React Wheel Picker joins Vercel Open Source Program",
    slug: "react-wheel-picker-vercel-oss",
    content: "Excited to announce that React Wheel Picker has been accepted into the Vercel Open Source Program...",
    published: true,
    createdAt: new Date("2025-07-24"),
  },
  {
    id: "2",
    title: "Next.js SEO Fundamentals",
    slug: "nextjs-seo-fundamentals",
    content: "Learn the fundamentals of SEO in Next.js applications...",
    published: true,
    createdAt: new Date("2025-04-26"),
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsSection projects={dummyProjects} />
      <ExperienceSection experiences={dummyExperiences} />
      <TechStackSection techStack={dummyTechStack} />
      <GitHubOverview />
      <BlogSection posts={dummyPosts} />
    </div>
  )
}
