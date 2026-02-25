import Image from "next/image";

export default function Gaming() {
    return (
        <main className="p-12">
            <h1 className="text-3xl font-bold">Gaming Corner 🎮</h1>
            <p className="mt-4">
                Cozy games, Nintendo Switch, Animal Crossing, and more!
            </p>
            {/* Image Column */}
            <br/>
            <div className="flex-1 flex items-center justify-center">
                <Image
                    src="/gaming/IMG_8033.PNG"
                    alt="Mabayu"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </div>
            <div className="my-12 text-center">
                <h2 className="text-2xl font-semibold">Photo Gallery</h2>
                <div className="mt-2 mx-auto w-24 h-1 bg-black rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
                <Image src="/gaming/ACNH1.png" alt="Diana's Baths" width={600} height={500} className="rounded-xl shadow-lg object-cover" />
                <Image src="/gaming/ACNH2.png" alt="Diana's Baths" width={600} height={500} className="rounded-xl shadow-lg object-cover" />
            </div>
        </main>
    );
}