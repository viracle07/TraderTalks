"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BiLoaderCircle } from "react-icons/bi";


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
        Ideas: ""
    }

    const formValidation = Yup.object({
        Ideas: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required")
    })

    const handleSubmit = async (values, {resetForm} ) => {
        try {
            setProcessing(true)
            const miDetails = {
                author: session.user.name,
                img: session.user.image,
                timestamp: new Date().toLocaleDateString(),
                ...values
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
        <main className="min-h-dvh bg-[url('/bg1.jpg')] bg-no-repeat bg-cover bg-center h-screen w-auto">
            <div className='bg-white/75 h-screen w-auto flex max-md:flex-col justify-center py-15'>
                <div className='space-y-10 max-md:px-4'>
                    <div className='flex justify-center lg:text-3xl text-2xl max-md:text-center text-green-800 font-bold bg-gray-300/50  rounded-full shadow-sm px-6 py-2'>
                        <h1>Share your Ideas and Market Insights</h1>
                    </div>
                    <div className='shadow-2xl rounded-md'>
                        <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
                            <Form className='space-y-5 '>
                                <div className='flex flex-col gap-2 items-center w-fit lg:w-[40rem]'>
                                    <Field as="textarea" rows="10" name="Ideas" placeholder="    What's on your mind?" className="lg:w-[30rem] w-[18rem] justify-center  shadow-md rounded-md bg-white" ></Field>
                                    <ErrorMessage name='Ideas' component={"p"} className='text-xs font-semibold text-red-600'></ErrorMessage>
                                </div>

                                <button type='submit' className='bg-green-700 text-white font-semibold shadow-lg w-full p-2 rounded-sm text-lg hover:bg-green-800 hover:cursor-pointer transition-all duration-200 flex items-center justify-center' >
                                     {
                                    processing ? <BiLoaderCircle className='animate-spin text-center text-white' />
                                        : "Post"
                                }
                                </button>
                            </Form>
                        </Formik>
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
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </main >
    )
}

export default NewPost
