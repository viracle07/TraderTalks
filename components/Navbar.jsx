"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';







const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const { data: session } = useSession()
  console.log(session);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between shadow-md lg:px-8 px-4 py-3 bg-white'>
      <Link href={"#"} className='flex items-center gap-2 z-40'>
        <Image src={"/logo.png"} alt='logo' width={800} height={800} className="w-10 h-10" />
        <span className='max-md:hidden flex items-center gap-1'>
          <p className='md:text-xl text-green-800 font-bold'>Trader</p>
          <p className='md:text-xl text-red-600 font-bold'>Talks</p>
        </span>
      </Link>

      <div className=' px-8 py-1 rounded-full max-lg:hidden'>

        <div className='lg:flex items-center gap-4 hidden'>
          <Link href={"/"} className='text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>Home</Link>
          <div className='border-r border-gray-800 h-5 w-fit'></div>

          <Link href={"/explore"} className='flex items-center gap-1 text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>Explore Ideas
            <FcIdea />
          </Link>
          <div className='border-r border-gray-800 h-5 w-fit'></div>

          <Link href={"/faqs"} className='flex items-center gap-1 text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>FAQs
            <FcIdea /></Link>
          <div className='border-r border-gray-800 h-5 w-fit'></div>

          <Link href={"/about"} className='text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>About</Link>
        </div>
      </div>


      {/* mobile nav view */}
      <div className={`lg:hidden bg-teal-100 h-screen w-full absolute top-0 left-0 items-center flex flex-col gap-10 pt-20 ${navOpen ? "opacity-100" : "opacity-0"} `}>
        <Link onClick={() => setNavOpen(false)} href={"/"} className='text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg' >Home</Link>


        <Link onClick={() => setNavOpen(false)} href={"/explore"} className='flex items-center gap-1 text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>Explore Ideas
        </Link>


        <Link onClick={() => setNavOpen(false)} href={"#"} className='flex items-center gap-1 text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>FAQs
        </Link>


        <Link onClick={() => setNavOpen(false)} href={"/about"} className='text-gray-800 hover:text-red-600 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>About</Link>
      </div>

      {
        session ?
          <div className='ml-auto max-md: flex justify-center px-2 lg:ml-0'>
            <button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img src={session?.user?.image} alt={session?.user?.name.slice(0, 2).toUpperCase()} className="w-8 h-8 items-center rounded-full" />
            </button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}><Link href={"/profile"}>My Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href={"/new-post"}>Post Idea</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href={"/explore"}>Explore Ideas</Link></MenuItem>
              <MenuItem onClick={handleClose}><button onClick={() => signOut()}>Sign Out</button></MenuItem>
            </Menu>
          </div> : <Link href={"/auth/signin"} className='bg-teal-800 rounded-full lg:px-5 px-3 lg:py-1 py-2 flex items-center gap-2 text-md text-white font-semibold hover:bg-red-600 transition-all duration-150 '>
            <p className='max-md:hidden'>Sign In</p>
            <FaRegUser />
          </Link>
      }


      <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden text-2xl font-bold z-40'>
        {navOpen ? <IoCloseSharp /> : <HiMiniBars3 />}

      </button>

    </nav>
  )
}

export default Navbar
