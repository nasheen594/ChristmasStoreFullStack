import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert("Form Submitted");
   
    return (
        <div>
        <h1 className="text-center text-blue-700 text-2xl font-bold my-2 ">Contact Us</h1>
       <form className='border-2 border-teal-400 rounded-xl p-3 container mx-auto w-1/2' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2" placeholder="Your First Name" {...register("firstname")} />
    <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2" placeholder="Your Last name" {...register("lastname")} />
    <input className="border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400 my-2"  placeholder="Your Email" {...register("email")} />
    <textarea className=" border-4 w-3/4 hover:bg-green-100 focus:outline-none focus:ring focus:ring-blue-400" rows="10" cols="50"{...register("comment")} placeholder="Enter Your comment" />
      <br/>
      <br/>
      <input className=" rounded-xl text-white font-bold bg-blue-600 ring-2 ring-blue-500 p-2 my-2" type="submit" />
    </form>
           
          
        </div>
    );
};

export default Contact;