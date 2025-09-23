import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect("/auth/signin")

    }
    return (
        <main className='min-h-dvh'>
            <div className="bg-[url('/bg3.jpg')] bg-no-repeat bg-cover bg-center min-h-dvh px-4 lg:px-10 py-10 lg:space-y-20 space-y-10">
                <span className='text-white max-md:w-fit flex flex-col space-y-2'>
                    <h1 className='text-white font-bold lg:text-2xl text-xl'>
                        ABOUT US
                    </h1>
                    <p className='max-md:text-sm '>
                        "Welcome to Trader Talks – your hub for forex and crypto market insights."
                    </p>

                </span>
                <div className='space-y-5 lg:spcae-y-10'>

                    <div className='text-white w-fit lg:w-150 rounded-xl shadow-xl p-3 lg:p-5 space-y-3 lg:space-y-5 flex flex-col bg-white/5 lg:mt-10 text-sm'>
                        <p className='text-lg font-semibold text-green-600'>A Community for Traders</p>
                        <p>We believe that trading is more than charts and numbers; it’s about community, shared knowledge, and growing together. Trader Talks was built to create a space where traders of all levels can come together to exchange ideas, strategies, and perspectives on the ever-changing world of financial markets.</p>
                    </div>

                    <div className='text-white w-fit lg:w-150 rounded-xl shadow-xl p-3 lg:p-5 space-y-3 lg:space-y-5 flex flex-col bg-white/5 lg:mt-10 flex text-sm'>
                        <p className='text-lg font-semibold text-green-600'>Sharing Knowledge</p>
                        <p>Here, members can post their thoughts, share analysis, and learn from the experiences of others. Whether it’s a fresh trading strategy, a breakdown of technical tools, or insights into market trends, our community thrives on collaboration and collective wisdom.</p>
                    </div>
                </div>


            </div>


        </main>
    )
}

export default page
