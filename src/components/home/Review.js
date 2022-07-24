import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(result => setReviews(result))
    }, [])
    return (
        <div className='my-20'>
            <h1 className='text-center text-xl lg:text-2xl font-bold'>Clients <span className='text-secondary'>Feedback</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 px-2 lg:px-20 gap-10'>
                {
                    reviews.map(review => <div class="card  bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;