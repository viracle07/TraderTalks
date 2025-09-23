"use client"
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { BiLoaderCircle } from "react-icons/bi";
import Link from 'next/link';



const Explore = ({session}) => {
    const [ideas, setIdeas] =useState([])
    const [loading, setLoading] = useState(true)

    const fetchIdeas = async () => {
        const ideasArray = []
        const querySnapshot = await getDocs(collection(db, "trade"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const ideasObject = {
                id: doc.id,
                ...doc.data()
            }
            ideasArray.push(ideasObject)
        });
        setIdeas(ideasArray)
        setLoading(false)
        // console.log(ideas);
        
    }
    useEffect(()=> {fetchIdeas()}, [ideas])

    return (
        <main className='min-h-dvh'>
            {
                loading ? <div className='h-[80vh] flex items-center justify-center'><BiLoaderCircle className='text-4xl animate-spin' />
                </div> :
                <section>
                    {
                        ideas.map((idea, i)=>(
                          <div key={i}>
                            <div className="flex items-center">
                                <div className>
                                    <img src={idea.img} alt={ideas.img} />
                                    <p>{idea.author} </p>
                                </div>

                                <div>
                                    <p>{idea.Ideas} </p>
                                </div>

                                <div>
                                    <p>{idea.timestamp} </p>

                                    <Link href={""}>Read more</Link>
                                </div>
                    
                            </div>
                          </div>  
                        ))
                    }
                </section>
            }
        </main>
    )
}

export default Explore
