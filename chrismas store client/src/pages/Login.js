import React from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';


const Login = () => {
    // const location = useLocation();
    // const history = useHistory();
    const { setIsLoading,user,logout, googleSignIn, isLoading, handleemail, handlepassword, islogin, loginProcess, togglelogin, email, password, setError, error } = useFirebase();
    // const redirect_uri = location.state?.from || '/home'
    // console.log('came from', location.state?.from)

    // const { googleSignIn, handleemail, handlepassword, togglelogin, islogin, loginProcess } = useAuth();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                // history.push(redirect_uri);
            }).finally(() => setIsLoading(false))
    }
    const handleSigninwithemailpassword = () => {
        loginProcess()
            .then(result => {
                // history.push(redirect_uri)
                setError('');
            }).catch(error => { setError('Password and/or Email did not match') }).finally(() => setIsLoading(false))
    }

    return (
        <div className="border-2 border-teal-400 rounded-xl p-3 container mx-auto w-2/6">
            <h1 className="text-yellow-900">Please {islogin ? 'Sign Up' : 'Login'}</h1>

            {/* <label htmlFor="email">Email:       </label> */}
            <input onBlur={handleemail} className='mx-auto w-2/3 mb-2' type="email" name="email" id="email" required placeholder="Enter your email" />
            <br />
            {/* <label htmlFor="password">Password: </label> */}
            <input onBlur={handlepassword} className='mx-auto w-2/3 mb-2' type="password" name="password" id="password" required placeholder="Enter your password" />
            <br />
            <input onChange={togglelogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-red-900" htmlFor="exampleCheck1">Are you new to Chrismas Store?{islogin && <div><h6 className='text-teal-500 font-bold'>Please Go to <Link className="text-blue-500 font-bold"to='/signup'>Sign Up</Link> page</h6></div>}</label>
            <br />
            <p className='text-danger'>{error}</p>
            <button onClick={handleSigninwithemailpassword}  className="rounded-full bg-lime-500 p-4 " >Login</button>
            <div className="text-red-600 mb-2">{error}</div>
            {user.email && <p className="text-green-600 text-2xl">Log in with Email and Password is Successful</p>}
            <br />
            <br />
            
            <button className="mb-4 rounded-full bg-green-500 p-4 " onClick={handleGoogleLogin} variant="warning">Google Sign in</button>

            <button className="mb-4 ms-4 rounded-full bg-green-500 p-4 " onClick={logout} variant="warning">Sign Out</button>
        </div >
    );
};

export default Login;