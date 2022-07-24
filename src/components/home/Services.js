import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])
    return (
        <div className='mt-16'>
            <h1 className='text-center text-xl lg:text-2xl font-bold mb-10'>Provide awesome <span className='text-secondary'>services</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-20'>
                {
                    services.map((serviced) => <Service key={serviced._id} services={serviced}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;