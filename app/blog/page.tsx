import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Blog() {
    // Hide blog in production unless explicitly enabled
    if (process.env.NEXT_PUBLIC_SHOW_BLOG !== "true") {
        notFound();
    }

    const postsDir = path.join(process.cwd(), "app/blog/posts");
    const files = fs.readdirSync(postsDir);

    const posts = files.map((file) => {
        const slug = file.replace(".md", "");
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, "utf8");

        const { data } = matter(content);

        return {
            slug,
            title: data.title || slug,
            description: data.description || "",
            date: data.date || "",
        };
    });

    return (
        <main className="p-12 max-w-4xl mx-auto">
            {/* ✅ Your original content */}
            <h1 className="text-3xl font-bold">Blog</h1>
            <p className="mt-4 text-lg mb-8">
                Tech blogs on AI, security, and backend engineering.
            </p>

            {/* ✅ Blog posts list */}
            <div className="space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="blog-card-link block"
                    >
                        <div className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600">{post.description}</p>
                            <p className="text-sm text-gray-400 mt-2">{post.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}