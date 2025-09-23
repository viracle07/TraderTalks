import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    const legal = [
        { label: "Privacy policy", url: "/" },
        { label: "Terms of service", url: "/" }
    ]

    const products = [
        { label: "Post Ideas", url: "/new-post" },
        { label: "Explore Ideas", url: "/" },
        { label: "About Us", url: "/" },
        { label: "Contact Us", url: "/" },
        { label: "FAQs", url: "/" }
    ]
    return (
        <main className='flex max-md:flex-col max-md:items-center justify-between lg:px-8 px-4 py-5 bg-gray-800 text-white max-md:space-y-5'>
            <div className='lg:space-y-15 space-y-5'>
                <Link href={"/"} className='flex items-center gap-2 z-40'>
                    <Image src={"/logo.png"} alt='logo' width={800} height={800} className="w-10 h-10" />
                    <span className='flex items-center gap-1'>
                        <p className='md:text-xl text-green-800 font-bold'>Trader</p>
                        <p className='md:text-xl text-red-600 font-bold'>Talks</p>
                    </span>
                </Link>
                <p></p>

                <Link href={"/auth/signin"}>
                    <div className='border border-white/50 rounded-full px-6 py-2 bg-green-500/50 hover:bg-red-600 transition-all duration-150'>
                        <p>Sign up for free</p>
                    </div>
                </Link>

            </div>

            <div className='text-sm grid grid-cols-2 gap-20'>
                <div className='space-y-5'>
                    <p className='text-lg font-bold'>Products</p>
                    <div className='flex flex-col space-y-3'>
                        {products.map((items, index) => (
                            <Link key={index} href={items.url} className='hover:text-red-600'>{items.label} </Link>)
                        )}
                    </div>
                </div>

                <div className='space-y-5'>
                    <p className='text-lg font-bold'>Legal</p>
                    <div className='flex flex-col space-y-3'>
                        {legal.map((items, index) => (
                            <Link key={index} href={items.url} className='hover:text-red-600'> {items.label}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className='space-y-10'>
                <div className='text-xs'>
                    <p>&copy; 2025 TraderTalks. All rights reserved.</p>
                </div>

                <div className='flex gap-3 items-center text-2xl max-md:justify-between'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaXTwitter />
                    <FaYoutube />
                </div>

            </div>

        </main>
    )
}

export default Footer
