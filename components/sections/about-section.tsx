"use client";

import { motion } from "framer-motion";
import { Code2, Database, Rocket, Wrench } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="container py-8 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="section-heading">
            About Me
          </h2>
          <div className="prose dark:prose-invert text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I started my professional journey in mechanical engineering, working
              as a CNC Operator and later as a CNC Setter & Programmer after
              completing a diploma while working full-time.
            </p>
            <p className="leading-relaxed">
              Life circumstances required me to pause and adapt, and during this
              phase, I worked with Oracle-based systems to manage store
              operations — which sparked my interest in software and
              problem-solving through technology.
            </p>
            <p className="leading-relaxed">
              In February 2022, I made a deliberate decision to transition into
              web development and dedicated myself full-time to learning and
              building. Over the past few years, I have worked extensively with
              JavaScript, React, and full-stack fundamentals.
            </p>
            <p className="font-medium text-foreground">
              I am now focused on building real-world projects, documenting my
              journey, and preparing my portfolio as I move toward freelance and
              professional opportunities.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Visual Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative pl-8 lg:pl-12 space-y-8"
        >
          {/* Vertical Line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border lg:left-4" />

          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-[35px] lg:-left-[44px] flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm">
              <Wrench className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Engineering Roots</h3>
              <p className="text-sm text-muted-foreground">
                Mechanical Engineering, CNC Programming & Operations
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-[35px] lg:-left-[44px] flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm">
              <Database className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">The Spark</h3>
              <p className="text-sm text-muted-foreground">
                Store Operations Management & Oracle Systems
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-[35px] lg:-left-[44px] flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack transition: JavaScript, React, Next.js
              </p>
              <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary mt-1">
                Feb 2022
              </span>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative">
            <div className="absolute -left-[35px] lg:-left-[44px] flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Current Focus</h3>
              <p className="text-sm text-muted-foreground">
                Building real-world projects & Freelancing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
