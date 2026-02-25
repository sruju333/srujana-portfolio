"use client";

import { useState } from "react";

type Project = {
    title: string;
    description: string;
    github: string;
};

export default function Projects() {
    const [token, setToken] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState("");

    async function loadProjects() {
        const res = await fetch("/api/projects", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            setError("Invalid token 😢");
            return;
        }

        const data = await res.json();
        setProjects(data);
        setError("");
    }

    return (
        <main className="p-12">
            <h1 className="text-4xl font-bold">Projects</h1>

            {/* Token UI */}
            <div className="mt-6 flex gap-2">
                <input
                    type="password"
                    placeholder="Enter API token"
                    className="border border-black px-4 py-2 rounded-lg"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <button
                    onClick={loadProjects}
                    className="bg-mint px-4 py-2 rounded-lg border-2 border-black hover:bg-[#A3D2CA]"
                >
                    Load Projects
                </button>
            </div>

            {error && <p className="mt-4 text-red-500">{error}</p>}

            {/* Projects UI */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <a
                        key={p.github}
                        href={p.github}
                        target="_blank"
                        className="p-6 border border-black rounded-xl shadow hover:scale-105 transition bg-white"
                    >
                        <h2 className="text-2xl font-semibold">{p.title}</h2>
                        <p className="mt-2 text-gray-600">{p.description}</p>
                    </a>
                ))}
            </div>
        </main>
    );
}