import Image from "next/image";
import AnimatedBackground from "./components/AnimatedBackground";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
      <main className="min-h-screen text-darktext px-6 relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 text-center">
          <h1 className="text-6xl font-bold">
            Hi, I’m Srujana ! 🌿🧸
          </h1>

          <p className="mt-6 max-w-2xl text-lg">
            Software Engineer • Backend & AI • MSCS @ Boston University
          </p>

          <p className="mt-2 max-w-2xl text-lg">
            This is my tech blog, portfolio, and personal corner of the internet.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <a
                href="/blog"
                className="rounded-2xl bg-mint px-6 py-3 font-medium shadow-md hover:bg-teal transition border-2 border-black"
            >
              Read Blog
            </a>

            <a
                href="/projects"
                className="rounded-2xl bg-mint px-6 py-3 font-medium shadow-md hover:bg-teal transition border-2 border-black"
            >
              Projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mx-auto max-w-5xl bg-amber-50 rounded-2xl p-8 shadow-lg mt-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-accent-teal">
              About This Website
            </h2>

            <p className="mt-4 text-darktext">
              This site is my digital garden 🌱 where I write about software engineering,
              AI, security research, and things I’m learning.
              I also share personal interests like hiking and gaming.
            </p>

            <h2 className="mt-6 text-3xl font-semibold text-accent-teal">
              About Me
            </h2>

            <p className="mt-4 text-darktext">
              I’m a backend-focused software engineer with experience in distributed systems,
              AI applications, and research projects. I love building scalable systems and
              explaining tech concepts in simple ways.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Image
                src="/profile.jpg"
                alt="Srujana Portrait"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />
      </main>
  );
}