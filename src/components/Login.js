import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/images/logos/logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../init.firebase'
import Loading from '../shared/Loading';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let setError;
    let setLoading;
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    if (error) {
        setError = <p className='text-red-400 text-center mt-2'>{error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleGoogle = () => {
        setError = ""
        signInWithGoogle()
    }
    return (
        <div className=' flex justify-center items-center h-full '>
            <div className='border w-80 h-80 flex justify-center items-center text-center shadow relative'>
                <div>
                    <h1 className=' top-4 left-1/3 absolute'> <img width={100} src={logo} alt="" /></h1>
                    <h2 className='font-extrabold text-xl mb-4'>Login With</h2>
                    <button onClick={handleGoogle} className='btn btn-outline lowercase w-3/4 mb-3 rounded-full'><span className=' w-full flex justify-between items-center'><FcGoogle style={{ fontSize: '1.5em' }} /> Continue with Google</span></button>
                    {setLoading}
                    <p >Don't have an account? <Link to="/login" className='text-cyan-400 text-semibold underline'>Create an account</Link></p>
                    {setError}
                </div>
            </div>

        </div>
    );
};

export default Login;