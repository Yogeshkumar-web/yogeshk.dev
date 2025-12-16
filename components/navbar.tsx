"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center justify-between px-4 md:px-8'>
                <div className='mr-4 hidden md:flex'>
                    <Link href='/' className='mr-6 flex items-center space-x-2'>
                        <span className='hidden font-bold sm:inline-block'>
                            Portfolio
                        </span>
                    </Link>
                    <nav className='flex items-center space-x-6 text-sm font-medium'>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-foreground/60"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <div className='w-full flex-1 md:w-auto md:flex-none'>
                        {/* Search or other items can go here */}
                    </div>
                    <ThemeToggle />
                    <div className='md:hidden'>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className='h-5 w-5' />
                            ) : (
                                <Menu className='h-5 w-5' />
                            )}
                            <span className='sr-only'>Toggle Menu</span>
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='container md:hidden'>
                    <div className='flex flex-col space-y-2 pb-4 pt-2'>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                    pathname === item.href
                                        ? "bg-accent text-accent-foreground"
                                        : "text-foreground/60"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
