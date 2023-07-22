import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully');

                    reset();
                }
            })
    };
    return (
        <div className="col addoffer my-5 w-75 mx-auto">
            <h1  className="text-center text-purple-700 text-2xl font-bold my-2 ">Please Add a Product Here</h1>
            <form className='border-2 border-purple-400 rounded-xl p-3 container mx-auto w-1/2' onSubmit={handleSubmit(onSubmit)}>

            <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2" placeholder="Enter Product Name" {...register("name")} />
            <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2"  placeholder="Enter Price" {...register("price")} />
            <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2"  placeholder="Enter Product Image URL" {...register("img")} />
    <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2"  placeholder="Enter Discount" {...register("discount")} />

    <textarea className=" border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400" rows="10" cols="50"{...register("detail")} placeholder="Enter Product's Details" />
      <br/>
      <br/>
      <input className=" rounded-xl text-white font-bold bg-purple-600 ring-2 ring-blue-500 p-2 my-2" type="submit" value='Add a Product' />
            </form>


        </div>
    );
};

export default AddAProduct;