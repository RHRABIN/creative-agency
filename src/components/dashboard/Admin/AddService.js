import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../shared/Loading'
const AddService = () => {
    const [loading, setLoading] = useState(true)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = "b4c116253bc813b71c0b6c9cfa8a03e9";

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        title: data.name,
                        text: data.description,
                        img: img,
                    }

                    fetch('https://protected-depths-40320.herokuapp.com/service', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {

                            if (inserted.insertedId) {
                                alert('Added Product succesfully')
                                reset()
                                setLoading(false)
                            }
                            else {
                                alert('Failed to add the product')
                                reset()
                                setLoading(false)

                            }
                        })
                }
            })
    }



    return (
        <div>
            <div className=''>
                <h2 className="text-2xl font-bold ml-4 lg:ml-10  mt-5">Add New <span className='text-secondary'>Product</span></h2>
                <div className="">

                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs lg:max-w-sm">
                                <label className="label">
                                    {errors.name?.type === 'required' && <p className='text-red-500'>{errors.name.message}</p>}
                                </label>
                                <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />

                            </div>




                            <div className="form-control w-full max-w-xs lg:max-w-sm">
                                <label className='label'>
                                    {errors.description?.type === 'required' && <p className='text-red-500'>{errors.description.message}</p>}
                                </label>
                                <textarea className="textarea textarea-bordered my-2 w-full max-w-xs" placeholder="Add description" {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })} />

                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control  w-[190px] ">
                                    <label className="label">
                                        {errors.image?.type === 'required' && <p className='text-red-500'>{errors.image.message}</p>}
                                    </label>
                                    <input type="file" className="input input-bordered mt-6 pt-2 " {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })} />

                                </div>
                                <div className='w-[190px] mt-10'>
                                    <input type="submit" value={'Submit'} className=" max-w-xs btn btn-info" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddService;