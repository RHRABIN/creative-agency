import axios from 'axios';

import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../init.firebase';

const UserReview = () => {
    const [user] = useAuthState(auth)
    const nameRef = useRef();
    const companyNameRef = useRef();
    const descriptionRef = useRef();
    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            name: nameRef.current.value,
            companyName: companyNameRef.current.value,
            description: descriptionRef.current.value,
            userEmail: user.email,
        }
        const { data } = await axios.post('http://localhost:5000/review', review);
        formRef.current.reset()
        if (!data.success) {
            return alert(data.message)
        }
        alert(data.message)
    }
    return (
        <div className='mx-2 lg:mx-10 mt-10 '>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="text" ref={nameRef} placeholder="Your Name" required className="input w-full max-w-xs lg:max-w-sm mb-4" /> <br />

                <input type="text" ref={companyNameRef} placeholder="Company name, Designation" required className="input w-full max-w-xs lg:max-w-sm mb-4" /> <br />
                <textarea rows={4} type="text" ref={descriptionRef} placeholder="Description" required className="textarea w-full max-w-xs lg:max-w-sm mb-4" /> <br />

                <input type="submit" value={'Send'} className="btn btn-primary px-12 my-4" />
            </form>
        </div>
    );
};

export default UserReview;