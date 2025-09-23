import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="bg-teal-950/50 min-h-dvh flex items-center justify-center">
        <div className="text-white flex flex-col judtify-center items-center gap-20 lg:w-3xl w-full max-md:p-3 md:px-4">
          <h1 className="text-center md:text-4xl text-2xl font-bold">The Hub for Trading Ideas & Strategies</h1>

          <p className="text-xl text-center">
            <span className="text-green-500 font-bold">Trader</span> <span className="text-red-500 font-bold">Talks</span> is where market ideas come alive. Share your trading strategies, post analyses, and discover perspectives from other traders. Whether you’re just starting out or are an experienced pro, TraderTals is the place to learn, connect, and grow with a community built on knowledge and collaboration.
          </p>

          <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
            <Link href={"/"} className="border border-gray-400 rounded-lg px-8 py-3 text-xl hover:bg-gray-50/10 max-md:w-full text-center">Explore Ideas</Link>
            <Link href={"/new-post"} className="text-xl px-8 py-3 rounded-lg bg-green-600 hover:bg-green-800 transition-all duration-200 max-md:w-full text-center">Post Ideas</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
