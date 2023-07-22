import React, { useEffect, useState } from 'react';
import pic from '../images/light.png'
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';


const Header = () => {
    const {user}=useFirebase()
   
    return (
        <div>
             <div  className="banner"> 
		<img src={pic} alt="Christmas Light" style={{width:'100%',height:"50px"}}/>
		<h1 className="text-3xl text-blue-600 text-center font-bold my-3">Welcome to Our Christmas Store</h1> 
		<p className="text-xs text-center">This page should be tried in safari, chrome or Mozila.</p> 
	</div> 
    
   

    <div>
		<ul className="flex justify-center">
			<li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/home">Home</Link></li>
		{user.email && <ul className="flex justify-center"><li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/contact">Contact Us</Link> </li>
			
            <li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/deals">Today's Deal</Link></li>
            <li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/addaproduct">Add Products</Link></li>
            <li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to='/manageproducts'>Manage Products</Link></li>
            </ul>}
           
        <li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/login">Login</Link></li>
        <li className="bg-emerald-300 text-white font-bold text-lg p-1 m-1 border rounded-lg hover:text-xl hover:text-blue-600"> <Link to="/signup">SignUp</Link></li>
		</ul>
	</div> 
        </div>
       
    );
};

export default Header;