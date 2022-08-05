import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assests/images/logos/logo.png'
import auth from '../init.firebase';
import { AiOutlineMenu } from 'react-icons/ai'
const Heading = ({ children }) => {
    const location = useLocation()
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div class="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col relative">
                <div class="w-full navbar bg-transparent px-2 lg:px-20">
                    {location.pathname.includes("dashboard") ? <label for="my-drawer-2" class=" mr-4 drawer-button lg:hidden"><AiOutlineMenu /></label> : ''}
                    <div class="flex-1">
                        <Link to='/'><img width={100} src={logo} alt="" /></Link>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-2">
                            <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                            <li><NavLink to="/portfolio" className="rounded-lg">Our Portfolio</NavLink></li>
                            <li><NavLink to="/about" className="rounded-lg">Our Team</NavLink></li>
                            <li><NavLink to="/contact" className="rounded-lg">Contact Us</NavLink></li>
                            <li>{user ? <div class="avatar online">
                                <div class="w-8 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div> : ''}</li>

                            <li>{user ? <button onClick={handleLogout} className="rounded-lg">Logout</button> : <NavLink to="/login" className="rounded-lg">Login</NavLink>}</li>


                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                    <li><NavLink to="/portfolio" className="rounded-lg">Our Portfolio</NavLink></li>
                    <li><NavLink to="/about" className="rounded-lg">Our Team</NavLink></li>
                    <li><NavLink to="contact" className="rounded-lg">Contact Us</NavLink></li>
                    <li>{user ? <button onClick={handleLogout} className="rounded-lg">Logout</button> : <NavLink to="/login" className="rounded-lg">Login</NavLink>}</li>

                </ul>

            </div>
        </div>
    );
};

export default Heading;