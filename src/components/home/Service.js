import React from 'react';

const Service = ({ services }) => {
    const { title, img, text } = services;
    return (
        <div class="card w-full lg:w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img width={100} src={img} alt={title} class="rounded-xl w-[74px]" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{text}</p>

            </div>
        </div>
    );
};

export default Service;