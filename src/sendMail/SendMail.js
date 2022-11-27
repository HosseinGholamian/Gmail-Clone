import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";

import "./sendMail.css"
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"
function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    var errorList;
    console.log(errors)
    var errorList = Object.keys(errors).map((error) => {
        return (
            <p className='error'>{errors[error].message}</p>
        )
    })

    
    const onSubmit = async (formData) => {
        const addMail = await addDoc(collection(db, 'emails'),
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: serverTimestamp(),
            }
        )
            dispatch(closeSendMessage())


    }
    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton onClick={() => dispatch(closeSendMessage())}>
                    <CloseIcon className='sendMail__closeIcon' />
                </IconButton>
            </div>
            <div className='errorList'>{errorList}</div>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >


                <input type="text" {...register("to", { required: 'To is required', pattern: { value: /A[A-Z0-9+_.-]+@[A-Z0-9.-]+/i, message: "You have entered an invalid email address!" } })} placeholder='To:' />
                <input  {...register("subject")} type="text" placeholder='Subject:' />
                <textarea type="text" placeholder='Message...' className="sendMail__message"  {...register("message")} />

                <div className="sendMail__option">
                    <Button variant="contained" endIcon={<SendIcon />} type='submit' color='primary' className='sendMail__sendBtn'>Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail