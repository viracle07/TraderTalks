import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const page = () => {
    return (
        <main className='min-h-dvh max-md:flex flex-col'>
            <div className='flex flex-col items-center justify-center max-lg:px-4 py-10 space-y-4'>
                <h1 className='lg:text-3xl text-xl font-bold'>We’d Love to Hear From You</h1>
                <div className='p-4 font-semibold  text-gray-800 shadow-md rounded-md text-center'>
                    <p>At Trader Talks, we value every trader’s voice. Whether you have questions, suggestions, or partnership ideas, our team is here to connect with you.</p>
                </div>

            </div>
            <div className="lg:flex max-lg:space-y-3 items-center justify-center gap-4 h-auto w-auto bg-teal-800 pt-4 pb-10 lg:px-8 px-4 mt-4 font-semibold">

                <div className='bg-white lg:w-80 w-auto h-50  px-6 py-4 space-y-5 rounded-md shadow-xl'>
                    <h1 className='font-bold text-md'>Call Us</h1>
                    <span className='text-xs'>
                        <p>Weekdaays 6am-6pm GMT</p>
                        <p>Weekends 7am-3pm GMT</p>
                    </span>

                    <div className='text-xs pt-5'>
                        <p>+234 907 530 6515</p>
                        <div className='border-t-2 h-10 w-auto'></div>
                    </div>

                </div>

                <div className='bg-white lg:w-80 w-auto h-50  px-6 py-4 space-y-5 rounded-md shadow-xl'>
                    <h1 className='font-bold text-md'>Email Us Directly</h1>
                    <span className='text-xs'>
                        <p>Weekdaays 6am-6pm GMT</p>
                        <p>Weekends 7am-3pm GMT</p>
                    </span>

                    <div className='text-xs pt-5 underline'>
                        <Link href={"victorpat0107@gmail.com"}>victorpat0107@gmail.com</Link>
                    </div>

                </div>

                <div className='bg-white lg:w-80 w-auto h-50 px-6 py-4 space-y-5 rounded-md shadow-xl'>
                    <h1 className='font-bold text-md'>Connect With Us on Socials</h1>
                    <span className='text-xs'>
                        <p>Be part of the conversation and never miss an update.</p>
                    </span>

                    <div className='flex items-center pt-5 gap-4 text-lg'>
                        <Link href={""}><FaFacebook />
                        </Link>
                        <Link href={""}><FaInstagram />
                        </Link>
                        <Link href={""}><FaTelegramPlane />
                        </Link>
                        <Link href={""}><FaXTwitter />
                        </Link>
                        <Link href={""}><FaYoutube />
                        </Link>
                    </div>

                </div>

            </div>

            <section className='lg:h-100 max-md:min-h-dvh bg-zinc-300 lg:flex flex-col items-center justify-center space-y-10 lg:px-10 px-4 pt-5'>
                <div className='flex flex-col items-center  justify-center space-y-3'>
                    <h1 className='max-md:text-center text-xl font-bold text-gray-800'>Collaborations & Partnerships</h1>
                    <p className='text-sm font-semibold text-center'>At Trader Talks, we’re always open to working with like-minded individuals and organizations who share our vision of empowering traders worldwide. Whether you’re an educator, a brand, or a fellow trader with valuable insights, we’d love to explore opportunities to grow together.</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-5 lg:shadow-md pb-10'>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <img src="/bg.jpg" alt="image" className='h-20 w-20 rounded-full' />
                        <span className='space-y-3 flex flex-col items-center justify-center'>
                            <p className='text-xs font-semibold underline'>Brand Partnerships</p>
                            <p className='text-xs text-center'>Showcase your products or services to an active community of forex and crypto enthusiasts.</p>
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <img src="/bg1.jpg" alt="image" className='h-20 w-20 rounded-full' />
                        <span className='space-y-3 flex flex-col items-center justify-center'>
                            <p className='text-xs font-semibold underline'>Community Growth</p>
                            <p className='text-xs text-center'>Collaborate on events, discussions, and projects that strengthen the trading community.</p>
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <img src="/bg3.jpg" alt="image" className='h-20 w-20 rounded-full' />
                        <span className='space-y-3 flex flex-col items-center justify-center'>
                            <p className='text-xs font-semibold underline'>Educational Content</p>
                            <p className='text-xs text-center'>Partner with us to provide webinars, tutorials, or expert articles that help traders sharpen their skills.</p>
                        </span>
                    </div>
                </div>


            </section>

            <section className="md:h-100 w-auto bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat lg:px-10 px-4 pt-10">
                < div className='space-y-5 lg:spcae-y-10 max-md:text-center'>

                    <div className='text-white w-fit lg:w-150 rounded-xl shadow-xl p-3 lg:p-5 space-y-3 lg:space-y-5 flex flex-col bg-white/5 lg:mt-10 text-sm'>
                        <p className='text-xl font-semibold text-green-600'>Stay Connected, Stay Informed</p>
                        <p className='leading-7'>At Trader Talks, we believe that every trader’s voice matters. By reaching out, you’re not just contacting us — you’re helping build a stronger community of learners and achievers. Whether it’s a question, an idea, or feedback, your input shapes the way we grow together. We’re more than a trading hub; we’re a family driven by knowledge, passion, and opportunity. So stay connected, share your thoughts, and let’s inspire one another to reach new heights in forex and crypto</p>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default page
