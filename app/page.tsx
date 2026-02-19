import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-darktext px-6">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-28 text-center">
          <h1 className="text-7xl font-bold">
            Hi, I’m Srujana ! 🌿
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

        {/* About Section with Image */}
        <section className="mx-auto max-w-5xl bg-cream rounded-2xl p-8 shadow-lg mt-12 flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Text Column */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-accent-teal">About This Website</h2>
            <p className="mt-4 text-darktext">
              This site is my digital garden 🌱 where I write about software engineering,
              AI, security research, and things I’m learning.
              I also share personal interests like hiking and gaming.
            </p>

            <h2 className="mt-6 text-3xl font-semibold text-accent-teal">About Me</h2>
            <p className="mt-4 text-darktext">
              I’m a backend-focused software engineer with experience in distributed systems,
              AI applications, and research projects. I love building scalable systems and
              explaining tech concepts in simple ways.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
                src="/profile.jpg"      // replace with your image path
                alt="Srujana Portrait"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
            />
          </div>
        </section>
      </main>
  );
}
