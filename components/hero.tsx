"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import {
    siNextdotjs,
    siReact,
    siPostgresql,
    siTypescript,
    siTailwindcss,
    siDrizzle,
} from "simple-icons";
import { Button } from "@/components/ui/button";

const TechBadge = ({ icon, name }: { icon: any; name: string }) => (
    <div className='flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-background hover:shadow-md cursor-default'>
        <svg
            role='img'
            viewBox='0 0 24 24'
            className='h-4 w-4'
            style={{ fill: `#${icon.hex}` }}
            xmlns='http://www.w3.org/2000/svg'
        >
            <title>{icon.title}</title>
            <path d={icon.path} />
        </svg>
        <span>{name}</span>
    </div>
);

export function Hero() {
    return (
        <section className='container flex flex-col items-center justify-center gap-6 py-12 text-center md:py-20'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='space-y-4'
            >
                <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                    Hi, I&apos;m{" "}
                    <span className='text-primary'>Yogesh Kumar</span>
                </h1>
                <p className='mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl'>
                    Full-stack developer passionate about building exceptional
                    digital experiences. Specialized in React, Next.js, and
                    modern web technologies.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex flex-col items-center gap-4'
            >
                <div className='flex gap-4'>
                    <Button variant='ghost' size='icon' asChild>
                        <Link
                            href='https://github.com/yourusername'
                            target='_blank'
                        >
                            <Github className='h-5 w-5' />
                        </Link>
                    </Button>
                    <Button variant='ghost' size='icon' asChild>
                        <Link
                            href='https://linkedin.com/in/yourusername'
                            target='_blank'
                        >
                            <Linkedin className='h-5 w-5' />
                        </Link>
                    </Button>
                    <Button variant='ghost' size='icon' asChild>
                        <Link
                            href='https://x.com/yogeshkumar_web'
                            target='_blank'
                        >
                            <X className='h-5 w-5' />
                        </Link>
                    </Button>
                </div>
                <div className='flex flex-col items-center gap-2 text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                        <Mail className='h-4 w-4' />
                        <span>yogeshkumarwebdev@email.com</span>
                    </div>
                    {/* Add more contact info here if needed, e.g., location, phone */}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='mt-8 space-y-6'
            >
                <h3 className='text-sm font-semibold tracking-wider text-muted-foreground uppercase'>
                    Technologies I Use
                </h3>
                <div className='flex flex-wrap justify-center gap-4'>
                    <TechBadge icon={siNextdotjs} name='Next.js' />
                    <TechBadge icon={siReact} name='React' />
                    <TechBadge icon={siTypescript} name='TypeScript' />
                    <TechBadge icon={siTailwindcss} name='Tailwind CSS' />
                    <TechBadge icon={siPostgresql} name='PostgreSQL' />
                    <TechBadge icon={siDrizzle} name='Drizzle ORM' />
                </div>
            </motion.div>
        </section>
    );
}
