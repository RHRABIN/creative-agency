import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../shared/Loading'
const AdminServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://protected-depths-40320.herokuapp.com/allorders')
            if (!data.success) {
                return alert('Opps! Give Reload and try agan');

            }
            setOrders(data.result);
            setLoading(false)
        })()
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>

            <div class="overflow-x-auto px-4 mt-10">
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th className=''>Name</th>
                            <th className=''>Email Id</th>
                            <th className=''>Service</th>
                            <th className='w-1/4' >Project</th>
                            <th className='w-36'>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            orders.map((order, index) => <tr >
                                <td className='pl-4 py-4 '>{order.name}</td>
                                <td className='pl-4 py-4'>{order.email}</td>
                                <td className='pl-4 py-4'>{order.courseName}</td>
                                <td className='pl-4 py-4' >{order.projectDescription.slice(0, 150)}...</td>
                                <td className='pl-4 py-4'><span><select class="select bg-transparent text-red-500 w-full max-w-xs">
                                    <option selected>Pending</option>
                                    <option >Done</option>
                                    <option >On going</option>
                                </select></span></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default AdminServiceList;