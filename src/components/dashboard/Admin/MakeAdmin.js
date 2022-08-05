import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const email = data.email
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-2 mt-10 ml-2 lg:ml-6 flex-col lg:flex-row'>
                <div className=" w-full max-w-xs ">
                    <label className="label">
                        <span>Email</span>
                        {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                    </label>
                    <input type="text" placeholder="jhon@gmail.com" className="input input-bordered w-full max-w-xs" {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        }
                    })} />

                </div>
                <input type="submit" value={'Submit'} className="mt-10 btn btn-info" />
            </form>
        </div>
    );
};

export default MakeAdmin;