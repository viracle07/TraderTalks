"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TbLoader3 } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import Link from 'next/link';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #D3D3D3',
    boxShadow: 24,
    p: 4,
}




const NewPost = ({ session }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [processing, setProcessing] = useState(false)


    const iv = {
        title: "",
        idea: "",
    }

    const formValidation = Yup.object({
        title: Yup.string().required("This is a required field"),
        idea: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required")
    })

    const handleSubmit = async (values, { resetForm }) => {
        try {
            setProcessing(true)
            const miDetails = {
                author: session.user.name,
                img: session.user.image,
                timestamp: new Date().toLocaleDateString(),
                authorId: session?.user?.id,
                ...values,
                likes: 0,
            }
            console.log(miDetails);
            const docRef = await addDoc(collection(db, "trade"), miDetails)
            console.log("Document written with ID: ", docRef.id);
            resetForm()
            handleOpen()

        } catch (error) {
            console.error("Error adding document", error)
            alert("Oops, an error occured. Try again later!")
        } finally {
            setProcessing(false)
        }

    }

    return (
        <main className="min-h-dvh">
            <div className='bg-teal-800 py-5 text-white px-4 flex items-center justify-center flex-col space-y-4'>
                <div className='flex items-center gap-2'>
                    <FaPen />
                    <h1 className='lg:text-3xl text-xl font-bold'>Create a New Post</h1>
                </div>
                <p className='text-center'>Share your market insights, strategies, or ideas with the Trader Talks community.</p>

            </div>
            <div className='flex max-md:flex-col justify-center lg:px-8 py-15'>
                <div className='space-y-10 max-md:px-4'>
                    <div className='lg:flex justify-between max-lg:space-y-3 gap-10'>
                        <div className='shadow-2xl rounded-md p-5 lg:w-100'>
                            <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
                                <Form className='space-y-5'>
                                    <label htmlFor="" className='text-sm text-gray-800'>Title</label>
                                    <div className='flex flex-col gap-2 items-center w-fit lg:w-auto'>
                                        <Field name="title" className="border border-gray-200 p-2 rounded w-full" placeholder="Enter post title"
                                        ></Field>
                                        <ErrorMessage name='title' component={"p"} className='text-xs font-semibold text-red-600'></ErrorMessage>
                                    </div>

                                    <label htmlFor="" className='text-sm text-gray-800'>Content</label>
                                    <div className='flex flex-col gap-2 items-center w-fit lg:w-auto'>
                                        <Field as="textarea" rows="3" name="idea" className="border p-2 rounded w-full border border-gray-200  rounded-sm bg-white" placeholder="Write your analysis..." ></Field>
                                        <ErrorMessage name='idea' component={"p"} className='text-xs font-semibold text-red-600'></ErrorMessage>
                                    </div>
                                    <div className='flex gap-9'>

                                    <button type='submit' className='bg-teal-800 text-white shadow-lg lg:w-full  p-2 px-3 rounded-sm text-lg hover:bg-teal-700 hover:cursor-pointer transition-all duration-200 flex items-center justify-center' >
                                        {
                                            processing ? <TbLoader3 className='animate-spin text-center text-white' />
                                                : "Post"
                                        }
                                    </button>
                                    <Link href={"/explore"} className='lg:hidden border hover:bg-gray-50/10 rounded-md font-semibold h-fit w-fit p-3'>View Post</Link>
                                    </div>

                                </Form>
                            </Formik>
                        </div>

                        <div className='border border-gray-200 bg-gray-100/70 p-5 rounded-md shadow-md h-fit'>
                            <div className="space-y-1 lg:space-y-3 text-xs">
                                <h1 className=" font-bold text-md text-teal-700 lg:text-lg">Tips for posting</h1>
                                <span className="flex items-center gap-2 ">
                                    <TiTick />
                                    <p>Be clear and concise</p>
                                </span>
                                <span className="flex items-center gap-2">
                                    <TiTick />
                                    <p>Avoid spams and promotions</p>
                                </span>
                                <span className="flex items-center gap-2 pb-5">
                                    <TiTick />
                                    <p>Add a timeframe</p>
                                </span>

                                <span className='space-y-2'>
                                    <p className='text-md font-semibold'>Community-Reminder</p>
                                    <p className='text-xs'>Respect other's views-every <br /> Idea adds value.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Post Successful
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Thank you for sharing your idea.
                    </Typography>
                </Box>
            </Modal>
        </main >
    )
}

export default NewPost
