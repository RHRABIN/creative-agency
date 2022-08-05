import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ services }) => {
    const { title, img, text, _id, price } = services;
    return (
        <div class="card w-full lg:w-80 bg-base-100 shadow-xl photo">
            <figure class="px-10 pt-10">
                <img width={100} src={img} alt={title} class="rounded-xl w-[74px]" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{text}</p>

            </div>
            <div className='photo-button'>
                <Link to={`dashboard/order/${_id}`} className='btn btn-warning px-6 '>Book Now</Link>
            </div>
        </div>
    );
};

export default Service;