import React from 'react';
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div style={{ backgroundColor: '#ebf1fc' }} class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='order/62ea130e72762ab9293f8351'>Order</Link></li>
                        <li><Link to='service'>Service List</Link></li>
                        <li><Link to='review'>Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;