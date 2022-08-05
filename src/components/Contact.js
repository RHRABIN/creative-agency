import React from 'react';
import './Contact.css'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div id="contact" className="flex justify-center items-center py-5">
                <div className="max-w-xs lg:max-w-lg">
                    <div className="card contact text-center card-form">
                        <div className="card-body">
                            <h3 className='text-3xl'>Contact Us</h3>
                            <p className='text-[18px]'>Please fill out this form to submit details</p>
                            <form onSubmit={handleSubmit}>
                                <div className=" my-3 gap-4 flex">
                                    <input type="text" className="form-control w-[50%] pl-2" placeholder="First Name" />
                                    <input type="text" className="form-control w-[50%] pl-2" placeholder="Last Name" />
                                </div>
                                <div className=" my-3">
                                    <input type="email" className="form-control w-full pl-2" placeholder="Email" />
                                </div>
                                <div className="my-3">
                                    <textarea className="form-control w-full pl-2" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn w-full">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;