
import React from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';


const Signup = () => {
    const { googleSignIn, handleSignUp, handleName, handleemail, handlepassword, error, user } = useFirebase();
    return (
        <div>
            <div>
            <h1 className="text-center text-blue-700 text-2xl font-bold my-2 ">Sign Up:Create an Account</h1>
              
                <form className="border-2 border-teal-400 rounded-xl p-3 container mx-auto w-2/6" onSubmit={handleSignUp} >
                    <input onBlur={handleName} className='mx-auto w-2/3 mb-2' type="text" name="name" id="name" required placeholder='Enter Your Name' />
                    <br />
                    <input onBlur={handleemail} className='mx-auto w-2/3 mb-2' type="email" name="email" id="email" required placeholder='Enter Your Email' />
                    <br />
                    <input onBlur={handlepassword} className='mx-auto w-2/3 mb-2' type="password" name="password" id="password" required placeholder='Enter Your Password' />
                    <br />
                   
                    <div className="text-red-600 mb-2">{error}</div>
                    <input className="rounded-full bg-lime-500 p-4 "  type="submit" value="Sign Up" />
                    {user.email && <p className="text-green-600 text-2xl">Sign Up with Email and Password is Successful,Please Go to <Link to='/login'>Login</Link> page</p>}

                </form>
                <div className="rounded-xl p-3 container mx-auto w-2/6">

                <p className='text-purple-800'>Already have an account? <Link className='font-bold text-blue-500' to='/login'>Login</Link></p>
                <h6 className='text-green-600'> Or you can sign in with Google</h6>
                <button className="mb-4 rounded-full bg-green-500 p-4 " onClick={googleSignIn} variant="warning">Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;