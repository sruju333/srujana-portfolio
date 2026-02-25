import FunBackground from "./FunBackground";

export default function Fun() {
    return (
        <main className="relative p-12 min-h-screen overflow-hidden">

            <h1 className="text-4xl font-bold">Fun & Hobbies 🌸</h1>

            <div className="mt-6 flex gap-4">
                <a href="/fun/hiking" className="rounded-xl bg-white px-6 py-3">
                    Hiking 🥾
                </a>
                <a href="/fun/gaming" className="rounded-xl bg-white px-6 py-3">
                    Gaming 🎮
                </a>
            </div>

            <FunBackground />
        </main>
    );
}