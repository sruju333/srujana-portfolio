import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    // Hide blog only if explicitly disabled
    if (process.env.NEXT_PUBLIC_SHOW_BLOG === "false") {
        notFound();
    }

    const { slug } = await params; // ✅ THIS LINE FIXES YOUR ERROR

    const filePath = path.join(
        process.cwd(),
        "app/blog/posts",
        `${slug}.md`
    );

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);

    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return (
        <main className="max-w-3xl mx-auto p-12">
            <article className="prose prose-lg prose-ul:list-disc prose-ol:list-decimal">
                <h1 className="font-bold">{data.title}</h1>
                <p className="text-gray-500">{data.date}</p>

                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </main>
    );
}