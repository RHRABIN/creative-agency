import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import { GiBeachBag } from 'react-icons/gi'
import { BiMessageDots } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { FiUserPlus } from 'react-icons/fi'
const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div style={{ backgroundColor: '#ebf1fc' }} class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>



                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='order/62ea130e72762ab9293f8351'><BsCart2 />Order</NavLink></li>
                        <li><NavLink to='service'><GiBeachBag />Service List</NavLink></li>
                        <li><NavLink to='review'><BiMessageDots />Review</NavLink></li>
                        <li><NavLink to='all-service'><MdOutlineHomeRepairService /> All Orders</NavLink></li>
                        <li><NavLink to='add-service'><GrAdd /> Add Service</NavLink></li>
                        <li><NavLink to='make-admin'><FiUserPlus /> Make Admin</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;