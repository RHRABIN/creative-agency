import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://protected-depths-40320.herokuapp.com/services')
            .then(res => res.json())
            .then(result => setServices(result))
        setLoading(false)
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
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