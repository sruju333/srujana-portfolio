"use client";

import { motion } from "framer-motion";

type StackCategory = {
    title: string;
    items: string[];
};

const techStack: StackCategory[] = [
    {
        title: "Languages",
        items: [
            "Java", "C/C++", "Go", "Python", "TypeScript",
            "R", "Swift", "SQL", "HTML", "CSS"
        ],
    },
    {
        title: "AI / ML",
        items: [
            "PyTorch", "TensorFlow", "Pandas", "NumPy", "MATLAB"
        ],
    },
    {
        title: "Backend & Frameworks",
        items: [
            "Spring Boot", "Node.js", "Next.js", "React",
            "REST APIs", "Swagger", "Protobuf"
        ],
    },
    {
        title: "Cloud & DevOps",
        items: [
            "AWS", "Azure", "Heroku", "Alibaba Cloud",
            "Docker", "Kubernetes (K8s)", "Jenkins",
            "GitHub Actions"
        ],
    },
    {
        title: "Databases & Messaging",
        items: [
            "PostgreSQL", "MongoDB", "Redis", "Kafka"
        ],
    },
    {
        title: "Monitoring & Observability",
        items: [
            "New Relic", "Grafana"
        ],
    },
    {
        title: "Testing",
        items: [
            "JUnit", "Mockito", "Postman"
        ],
    },
    {
        title: "Mobile Development",
        items: [
            "iOS", "Xcode"
        ],
    },
    {
        title: "Developer Tools & Collaboration",
        items: [
            "Git", "GitHub", "Linux / Unix", "JIRA",
            "Confluence", "IntelliJ IDEA", "VirtualBox"
        ],
    },
];

export default function TechStack() {
    return (
        <section className="py-14 relative">
            <h2 className="text-4xl font-bold text-center mb-16">
                ⬇️ Tech Stack ⬇️
            </h2>

            <div className="max-w-6xl mx-auto space-y-16">
                {techStack.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-amber-50 p-8 rounded-2xl shadow-lg border border-black"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-accent-teal">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-mint border-2 border-black rounded-full shadow-sm text-sm font-medium hover:scale-105 transition"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}