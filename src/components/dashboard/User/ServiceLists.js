import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../init.firebase'
import Loading from '../../../shared/Loading';
const ServiceLists = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/orders/${user?.email}`);
            setOrders(data)
            setLoading(false)
        })()

    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-center text-xl font-bold mt-6'>Your Total <span className='text-secondary'>order</span> : {orders.length}</p>
            {orders.length > 0 &&

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-12 mt-10'>
                    {orders.map(order => <div key={order._id} class="card max-w-sm  bg-base-100 shadow-xl">
                        <div className='pt-6 flex justify-between items-center px-6'>
                            <img width={50} src={order.projectImage} alt="" />
                            <button className='btn btn-primary btn-sm px-6'>Pay</button>
                        </div>
                        <div class="p-6">
                            <h2 class="text-xl font-semibold mb-2">{order.projectTitle}</h2>
                            <p>{order.projectDetail}</p>

                        </div>
                    </div>)}
                </div>}
        </div>
    );
};

export default ServiceLists;