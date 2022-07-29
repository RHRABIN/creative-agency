import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(result => setReviews(result))
    }, [])
    return (
        <div className='mt-10'>
            <h1 className='text-center text-xl lg:text-2xl font-bold'>Clients <span className='text-secondary'>Feedback</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 px-2 lg:px-20 gap-10'>
                {
                    reviews.map(review => <div class=" border  bg-base-100 shadow-xl">
                        <div className='flex gap-5 items-center pl-[2rem] mt-4'>
                            <div class="avatar">
                                <div class="w-16  rounded-full shadow-xl">
                                    <img src={review.img} alt={review.name} />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold'>{review.name}</h1>
                                <h1 className='font-semibold'>{review.designation}</h1>
                            </div>
                        </div>

                        <div class="card-body">

                            <p>{review.comment}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;