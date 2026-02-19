export default function Home() {
  return (
      <main className="min-h-screen bg-sky text-darktext">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-28 text-center px-6">
          <h1 className="text-5xl font-bold">
            Hi, I’m Srujana ! 🌿
          </h1>

          <p className="mt-6 max-w-2xl text-lg">
            Software Engineer • Backend & AI • MSCS @ Boston University
          </p>
          <p className="mt-2 max-w-2xl text-lg">
            This is my tech blog, portfolio, and personal corner of the internet.
          </p>

          <div className="mt-8 flex gap-4">
            <a
                href="/blog"
                className="rounded-2xl bg-mint px-6 py-3 font-medium shadow-md hover:bg-teal transition"
            >
              Read Blog
            </a>

            <a
                href="/projects"
                className="rounded-2xl bg-mint px-6 py-3 font-medium shadow-md hover:bg-teal transition"
            >
              Projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mx-auto max-w-4xl bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold">About This Website</h2>
          <p className="mt-4 text-gray-600">
            This site is my digital garden 🌱 where I write about software engineering,
            AI, security research, and things I’m learning.
            I also share personal interests like hiking and gaming.
          </p>

          <h2 className="mt-6 text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-gray-600">
            I’m a backend-focused software engineer with experience in distributed systems,
            AI applications, and research projects. I love building scalable systems and
            explaining tech concepts in simple ways.
          </p>
        </section>
      </main>
  );
}

