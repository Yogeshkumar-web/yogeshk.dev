import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { BlogSection } from "@/components/sections/blog-section";

// Dummy data - will be replaced with database queries
const dummyProjects = [
    {
        id: "1",
        title: "Portfolio Website",
        description:
            "Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.",
        imageUrl: "",
        tags: "Next.js, TypeScript, Tailwind CSS, Prisma",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com/yourusername/portfolio",
        featured: true,
    },
    {
        id: "2",
        title: "News Platform",
        description:
            "A news platform website using Next JS in Frontend and Express JS in backend",
        imageUrl: "",
        tags: "Next.js, TypeScript, Tailwind CSS, Prisma",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com/yourusername/portfolio",
        featured: true,
    },
];

const dummyExperiences = [
    {
        id: "1",
        company: "Self-Directed Full-Stack Web Development (2022 – Present)",
        role: "",
        location: "Full-time",
        startDate: "02-2022",
        endDate: "∞",
        description: `• Built multiple front-end and full-stack practice projects
• Focused on JavaScript fundamentals and React architecture
• Used GitHub for version control and project management`,
        tags: "TypeScript, React.js, React Native, Node, React State, Java, Tailwind CSS, Odin, Zalo Mini App, Apollo, teamwork, Webpack, Vite.js, activity",
        logo: "",
    },
];

import { getPublishedPosts } from "@/app/actions/blog";
import { AboutSection } from "@/components/sections/about-section";

export default async function Home() {
    const posts = await getPublishedPosts();

    // Take only the latest 2 posts for the home page
    const recentPosts = posts.slice(0, 2);

    return (
        <div className='flex flex-col'>
            <Hero />
            <ProjectsSection projects={dummyProjects} />
            <ExperienceSection experiences={dummyExperiences} />
            <AboutSection />
            <BlogSection posts={recentPosts} />
        </div>
    );
}
