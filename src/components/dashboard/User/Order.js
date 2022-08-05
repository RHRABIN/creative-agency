import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../init.firebase'
const Order = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const nameRef = useRef();
    const emailRef = useRef();
    const courseRef = useRef();
    const projectDetailRef = useRef();
    const priceRef = useRef();
    const formRef = useRef()
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://protected-depths-40320.herokuapp.com/service/${id}`).then(res => res.json())
            .then(data => setService(data))
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            courseName: courseRef.current.value,
            projectDescription: projectDetailRef.current.value,
            price: priceRef.current.value,
            projectImage: service.img,
            projectTitle: service.title,
            projectDetail: service.text,

        }
        const { data } = await axios.post('https://protected-depths-40320.herokuapp.com/order', order)
        formRef.current.reset()
        if (!data.success) {
            return alert(data.message)
        }
        alert(data.message)
    }
    return (
        <div className='mx-2 lg:mx-10 mt-10 '>
            <h1 className='font-bold text-xl ml-4 my-2'>Order For <span className='text-secondary'>{service.title}</span></h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="text" ref={nameRef} placeholder="Your Name/Company name" className="input w-full max-w-xs lg:max-w-sm mb-4" /> <br />
                <input type="email" value={user?.email} ref={emailRef} placeholder="Your email address" required className="input w-full max-w-xs lg:max-w-sm mb-4" /> <br />
                <input type="text" value={service.title} ref={courseRef} readOnly placeholder="Course name" required className="input w-full max-w-xs lg:max-w-sm mb-4" /> <br />
                <textarea rows={4} type="text" ref={projectDetailRef} placeholder="Project details" className="textarea w-full max-w-xs lg:max-w-sm mb-4" /> <br />
                <div className='flex gap-2 '>
                    <input ref={priceRef} readOnly value={service.price} type="number" placeholder='Price' className='input w-[190px]' />
                    <input type="file" className='py-2 w-[190px]' />
                </div>
                <input type="submit" value={'Send'} className="btn btn-primary px-12 my-4" />
            </form>
        </div>
    );
};

export default Order;