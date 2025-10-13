
import SetLikes from "@/components/SetLikes";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";



export const fetchSinglePoem = async (id) => {
    
    const docRef = doc(db, "trade", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}


export default async function exploreDynamic({ params }) {
    

    const poem = await fetchSinglePoem(params.id)
    console.log(poem);

    return (
        <main className="min-h-dvh bg-teal-200/50  md:w-4xl mx-auto p-3 md:p-6 shadow-sm space-y-4">
            <Link href={"/explore"}>
                <button className="p-2 text-xl text-xl rounded-full mb-5 hover:bg-gray-100 transition-all duration-200 cursor-pointer"><BiArrowBack />
                </button></Link>
            <div className="flex items-center gap-3">
                <img src={poem.img} alt={poem.author.slice(0, 1).toUpperCase()} className="w-8 h-8 rounded-full" />
                <h1>{poem.author} </h1>
            </div>

            <div>
                <p className="leading-8 font-bold">{poem.title} </p>
                <p className="leading-8 text-sm">{poem.idea} </p>
            </div>

            <p className="text-xs text-gray-500">{poem.timestamp} </p>
            <SetLikes id={poem.id} />

        </main>
    )
}
