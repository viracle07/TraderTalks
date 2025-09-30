import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";


export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="bg-teal-800 h-auto w-auto lg:flex max-lg:flex-col max-lg:space-y-5 items-center gap-20 text-white lg:px-10 px-4 lg:py-15 py-8">
        <div className="flex flex-col space-y-5 lg:space-y-10 w-auto">
          <span className="lg:text-4xl text-2xl font-extrabold space-y-1 lg:space-y-3">
            <p>Welcome to</p>
            <p>Trader Talks</p>
          </span>

          <div className="rounded-lg w-auto">
            <p className=" text-sm ">Join a vibrant community of forex and crypto traders where ideas, strategies, and market insights are shared daily. Learn from others, improve your skills, and grow with traders from all levels of experience.</p>
          </div>


          <Link href={"/auth/signin"} className=" h-fit w-fit px-5 py-2 font-semibold shadow-md bg-teal-500 rounded-md hover:bg-teal-600 transition-all duration-200">Join Us</Link>
        </div>

        <div className="w-auto h-auto">
          <Image src={"/bg4.jpg"} alt="image" width={800} height={800} className="h-auto lg:rounded-xl shadow-md" />
        </div>

      </section>

      <section className="lg:px-10 px-4 lg:py-10 py-5 lg:grid grid-cols-2 max-lg:space-y-5 gap-20">
        <div className="text-teal-800 w-auto space-y-5 lg:space-y-15">
          <div className="space-y-1 lg:space-y-5">
            <h1 className=" font-bold text-xl lg:text-2xl">Our Vision</h1>
            <p>A community of traders, shared knowledge, and growth. Trader Talks was built to create a space where traders of all levels can exchange ideas and strategies.</p>
          </div>

          <div className="space-y-1 lg:space-y-5">
            <h1 className=" font-bold text-xl lg:text-2xl">Join the Community</h1>
            <p>Connect with other traders, ask questions, and learn together.</p>
          </div>
        </div>

        <div className="text-teal-800 w-auto space-y-7 lg:space-y-18">
          <div className="space-y-1 lg:space-y-5">
            <h1 className=" font-bold text-xl lg:text-2xl">What We Offer</h1>
            <span className="flex items-center gap-5">
              <TiTick />
              <p>Share trading insights</p>
            </span>
            <span className="flex items-center gap-5">
              <TiTick />
              <p>Share trading insights</p>
            </span>
            <span className="flex items-center gap-5">
              <TiTick />
              <p>Share trading insights</p>
            </span>
          </div>

          <Link href={"/new-post"} className=" h-fit w-fit px-5 py-2  shadow-md text-white bg-teal-800 rounded-md hover:bg-teal-600 transition-all duration-200">Get Started</Link>
        </div>

      </section>

      <section className="min-h-dvh px-4 lg:px-10 space-y-7 lg:space-y-15 pb-10 lg:pb-20">
        <div className='border-b h-5 border-gray-200'></div>

        <div className="flex justify-center">
          <div className="flex items-center flex-col text-center w-auto space-y-3">
            <div className="lg:text-3xl text-2xl font-bold px-5 py-2  text-teal-800">
              <h1>Explore Trader Talks</h1>
            </div>
            <p>See what makes our community special — from market insights to strategy sharing, every post is a step toward smarter trading.</p>
          </div>
        </div>

        <div className="lg:grid grid-cols-3 space-y-5 ">
          <div className="flex flex-col shadow-xl rounded-md space-y-5 w-auto lg:w-80">
            <img src="/bg1.jpg" alt="images" className="rounded-t-md h-48 w-full" />

            <span className="px-4 space-y-3 pb-10">
              <h1 className="font-semibold text-xl">Market Insights</h1>
              <p className="text-sm">Get real-time ideas and perspectives from active forex and crypto traders.</p>
            </span>
          </div>
          <div className="flex flex-col shadow-xl rounded-md space-y-5 w-auto lg:w-80">
            <img src="/bg7.jpg" alt="images" className="rounded-t-md h-48 w-full" />

            <span className="px-4 space-y-3 pb-10">
              <h1 className="font-semibold text-xl">Strategies That Work</h1>
              <p className="text-sm">Discover proven trading methods and technical tools shared by the community.</p>
            </span>
          </div>
          <div className="flex flex-col shadow-xl rounded-md space-y-5 w-auto lg:w-80">
            <img src="/bg6.jpg" alt="images" className="rounded-t-md h-48 w-full" />

            <span className="px-4 space-y-3 pb-10">
              <h1 className="font-semibold text-xl">Learn & Grow Together</h1>
              <p className="text-sm">Engage with traders of all levels and sharpen your skills step by step.</p>
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
