"use client"
import React, { useEffect, useState } from 'react'
import { collection, getDocs, doc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { BiLoaderCircle } from "react-icons/bi";
import Link from 'next/link';
import { FaRegTrashCan } from "react-icons/fa6";
import SetLikes from '@/components/SetLikes';





const Explore = ({ session }) => {
    const [ideas, setIdeas] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchIdeas = async () => {
        const ideasArray = []
        const querySnapshot = await getDocs(collection(db, "trade"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const ideasObject = {
                id: doc.id,
                ...doc.data(),
            }
            ideasArray.push(ideasObject)
        });
        setIdeas(ideasArray)
        setLoading(false)
        // console.log(ideas);

    }
    useEffect(() => { fetchIdeas() }, [ideas])





    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "trade", id));
    }

    return (
        <main className="min-h-dvh bg-teal-200">
            <div className='bg-white text-teal-800 space-y-2 text-center p-7'>
                <h1 className='lg:text-3xl text-xl font-bold'>Explore Trader Talks</h1>
                <p>Read insights and ideas from the trading community</p>

            </div>
            {
                loading ? <div className='h-[80vh] flex items-center justify-center'><BiLoaderCircle className='text-4xl animate-spin' />
                </div> :
                    <section className='flex items-center justify-center'>
                        <div className='max-lg: flex flex-col '>
                            <div className='lg:grid grid-cols-2 bg-teal-200 gap-5 max-lg:space-y-3 px-8 py-5'>

                                {
                                    ideas.map((idea, i) => (
                                        <div key={i} className=''>
                                            <div className="bg-white rounded-2xl shadow-sm p-4 w-full max-w-md">
                                                <div className=" flex items-center justify-between">

                                                    <div className='flex items-center space-x-3 mb-3'>
                                                        <img src={idea.img} alt={idea.author} className="w-10 h-10 rounded-full"
                                                        />
                                                        <p className='text-sm'>{idea.author} </p>
                                                    </div>

                                                    {
                                                        idea.authorId == session.user.id ?
                                                            <button onClick={() => handleDelete(idea.id)}>
                                                                <FaRegTrashCan className='text-sm cursor-pointer' />
                                                            </button> : null
                                                    }
                                                </div>



                                                <div>
                                                    <p className="font-semibold text-gray-800">{idea.title} </p>
                                                    <p className='line-clamp-2 text-xs text-gray-500' >{idea.idea} </p>
                                                </div>

                                                <div className='flex items-center text-xs justify-between pt-5'>
                                                    <span className='flex items-center gap-3'>
                                                        <p className='text-gray-600'>{idea.timestamp} </p>
                                                        <SetLikes id={idea.id} />
                                                    

                                                    </span>

                                                    <Link href={`/explore/${idea.id}`} className='underline' >Read more</Link>

                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
            }
        </main>
    )
}

export default Explore
