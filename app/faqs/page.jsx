import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='min-h-dvh'>
            <section className='flex max-md:flex-col max-lg:space-y-5 items-center justify-between px-4 lg:px-12 py-5 lg:py-15 bg-gray-100/50 shadow-sm'>
                <div className='flex flex-col space-y-5'>
                    <span className='lg:text-3xl text-xl font-bold text-teal-700 space-y-2'>
                        <p>Frequently</p>
                        <p>Asked</p>
                        <p>Questions</p>
                    </span>

                    <span className='text-sm font-semibold'>
                        <p>At Trader Talks, we want to make your experience simple and clear.  </p>
                        <p>Below are some of the most common questions traders ask about our community.</p>
                    </span>
                </div>

                <div>
                    <Image src={"/bg3.jpg"} alt='image' width={800} height={800} className='lg:w-auto max-lg:fit h-auto rounded-md'></Image>
                </div>
            </section>

            <section className='lg:px-10 px-4  py-10 space-y-10 '>
                <div>
                    <h1 className=' text-teal-700 lg:text-2xl text-xl font-extrabold'>Get Started</h1>
                    <div className='border-b h-5 border-gray-200'></div>
                </div>
                <div className='flex max-lg:flex-col space-y-5 items-center justify-between'>
                    <div className='h-fit lg:w-80 p-6 rounded-md shadow-xl bg-gray-100 flex flex-col space-y-3 items-center justify-center text-center'>
                        <p className='text-red-600 text-md font-bold'>What is Trader Talks?
                        </p>
                        <p className='text-sm'>Trader Talks is a community-driven platform where forex and crypto traders share insights, strategies, and market analysis. It’s a place to learn, collaborate, and grow as a trader.</p>
                    </div>

                    <div className='h-fit lg:w-80 p-6 rounded-md shadow-xl bg-gray-100 flex flex-col space-y-3 items-center justify-center text-center'>
                        <p className='text-red-600 text-md font-bold'>Who can join Trader Talks?
                        </p>
                        <p className='text-sm'>Anyone with an interest in forex or cryptocurrency can join — from complete beginners to experienced traders. Our community thrives on diverse perspectives.</p>
                    </div>

                    <div className='h-fit lg:w-80 p-6 rounded-md shadow-xl bg-gray-100 flex flex-col space-y-3 items-center justify-center text-center'>
                        <p className='text-red-600 text-md font-bold'>Is Trader Talks free to use?
                        </p>
                        <p className='text-sm'>Yes, joining the community and exploring shared content is free. If premium features or advanced tools are added in the future, we’ll make clear announcements.</p>
                    </div>

                </div>

            </section>

            <section className='lg:px-10 px-4 py-15 bg-gray-100/50 space-y-10'>
                <h1 className='text-teal-700 text-xl lg:text-2xl font-bold'>Sharing & Learning</h1>

                <div className='md:grid grid-cols-2 max-lg:space-y-10 gap-15'>
                    <div className='flex flex-col  space-y-10'>
                        <div className='lg:flex items-center max-lg:space-y-5 gap-5'>
                            <div className='flex flex-col space-y-5 h-fit w-50'>
                                <p className='text-md font-semibold underline'>How do I share my own trading ideas?
                                </p>
                                <p className='text-xs'>Once you create an account, you can post your insights, strategies, or market analyses directly on the platform for others to read and discuss.</p>
                            </div>
                            <img src="/bg2.jpg" alt="picture" className='w-auto h-50' />
                        </div>

                        <div className='lg:flex items-center max-lg:space-y-5 gap-5'>
                            <div className='flex flex-col space-y-5 h-fit w-50'>
                                <p className='text-md font-semibold underline'>Can I trust the strategies shared on Trader Talks?
                                </p>
                                <p className='text-xs'>All posts reflect the personal opinions and experiences of community members. While many strategies are useful, we always recommend doing your own research and practicing good risk management before trading.</p>
                            </div>
                            <img src="/bg3.jpg" alt="picture" className='w-auto h-50' />
                        </div>
                    </div>

                    <div className='flex flex-col max-lg:space-y-5 space-y-10'>
                        <div className='lg:flex items-center max-lg:space-y-5 gap-5'>
                            <div className='flex flex-col space-y-5 h-fit w-50'>
                                <p className='text-md font-semibold underline'>Does Trader Talks offer financial advice?
                                </p>
                                <p className='text-xs'>No, we are not a financial advisory service. Content shared here is for educational purposes only and should not be taken as investment advice.</p>
                            </div>
                            <img src="/bg1.jpg" alt="picture" className='w-auto h-50' />
                        </div>

                        <div className='lg:flex items-center max-lg:space-y-5 gap-5'>
                            <div className='flex flex-col space-y-5 h-fit w-50'>
                                <p className='text-md font-semibold underline'>Can I learn trading from scratch on Trader Talks?
                                </p>
                                <p className='text-xs'>Yes! Our community is filled with beginner-friendly posts, discussions, and shared resources. While we don’t offer a structured course, you can learn step by step by following conversations, asking questions, and applying shared strategies.</p>
                            </div>
                            <img src="/bg.jpg" alt="picture" className='w-auto h-50' />
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default page
