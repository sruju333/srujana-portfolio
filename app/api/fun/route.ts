import { NextResponse } from "next/server";

interface UnsplashImage {
    urls: {
        regular: string;
    };
}

export async function GET() {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;

    if (!accessKey) {
        console.error("UNSPLASH_ACCESS_KEY is missing");
        return NextResponse.json([], { status: 500 });
    }

    try {
        const res = await fetch(
            "https://api.unsplash.com/photos/random?count=10&query=patterns",
            {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            throw new Error(`Unsplash API failed: ${res.status}`);
        }

        const data: UnsplashImage[] | UnsplashImage = await res.json();

        const dataArray: UnsplashImage[] = Array.isArray(data) ? data : [data];

        const urls = dataArray
            .filter((img): img is UnsplashImage => !!img?.urls?.regular)
            .map((img) => img.urls.regular);

        return NextResponse.json(urls);
    } catch (err) {
        console.error("Error fetching images:", err);
        return NextResponse.json([], { status: 500 });
    }
}