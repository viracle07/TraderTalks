"use client"
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const SetLikes = () => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);


    const handleLike = async () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);

    };

    return (
        <main>
            <button
                onClick={handleLike}
                className={`flex items-center space-x-1 ${liked ? "text-teal-600" : "text-gray-500 hover:text-teal-600"
                    }`}
            >
                <IoMdHeartEmpty
                    className={`w-5 h-5 ${liked ? "fill-red-600" : "fill-black"}`}
                />
                <span>{likes}</span>
            </button>
        </main>
    )
}

export default SetLikes
