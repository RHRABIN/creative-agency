import React from 'react';

const Footer = () => {
    return (
        <div className='min-h-[500px] mt-36 px-2 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10' style={{ backgroundColor: '#FBD062' }}>
            <div className='px-6 lg:px-36'>
                <h1 className='text-xl lg:text-2xl font-bold max-w-xl'>Let us handle your project, professionally.</h1>
                <p className='mt-6'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <form className='form-control mt-2'>
                <input type="text" placeholder="Type here" class="input w-full max-w-sm mb-4" />
                <input type="text" placeholder="Type here" class="input w-full max-w-sm mb-4" />
                <textarea class="textarea w-full max-w-sm h-[200px] mb-4" placeholder="Bio"></textarea>
                <button className='btn btn-primary w-20'>Send</button>
            </form>
        </div>
    );
};

export default Footer;