import Image from "next/image";

export default function Hiking() {
    return (
        <main className="p-12">
            <h1 className="text-3xl font-bold">Hiking Adventures 🏔️</h1>

            {/* About Section with Image */}
            <section className="mx-auto max-w-2xl bg-amber-50 rounded-2xl p-5 shadow-lg mt-4 flex flex-col md:flex-row items-center gap-8">

                {/* Text Column */}
                <div className="flex">
                    <p className="max-w-xl mb-6">
                        ☀️I love exploring trails and nature.☀️<br/>
                        🌲Here I share hikes and photos.🌲
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex-1 flex items-center justify-center">
                    <Image
                        src="/hiking/IMG_0460.jpeg"
                        alt="Diana's Baths"
                        width={200}
                        height={200}
                        className="rounded-full shadow-lg object-cover"
                    />
                </div>
            </section>

            <div className="my-12 text-center">
                <h2 className="text-2xl font-semibold">Photo Gallery</h2>
                <div className="mt-2 mx-auto w-24 h-1 bg-black rounded"></div>
            </div>
            <br/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                <Image src="/hiking/IMG_8948.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
                <Image src="/hiking/IMG_8730.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
                <Image src="/hiking/IMG_8814.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
                <Image src="/hiking/IMG_5778.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
                <Image src="/hiking/IMG_6032.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
                <Image src="/hiking/IMG_0452.jpeg" alt="Diana's Baths" width={300} height={300} className="rounded-xl shadow-lg object-cover" />
            </div>
        </main>
    );
}