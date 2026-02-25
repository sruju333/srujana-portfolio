"use client";

import { useEffect, useState } from "react";

export default function FunBackground() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("/api/fun");
                const data: string[] = await res.json();
                setImages(data);
            } catch (err) {
                console.error("Failed to fetch images:", err);
            }
        }

        fetchImages();
    }, []);

    if (images.length === 0) {
        return <p className="text-center text-lg font-semibold mt-12">Loading…</p>;
    }

    return (
        <div className="mt-12 overflow-hidden">
            <div className="flex w-max animate-scroll gap-6 opacity-40">
                {images.map((src) => (
                    <img
                        key={src}
                        src={src}
                        alt="Fun background"
                        className="h-96 w-auto rounded-xl shadow-lg object-cover" // bigger image
                    />
                ))}
            </div>
        </div>
    );
}