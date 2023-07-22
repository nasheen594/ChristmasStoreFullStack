import React, { useEffect, useState } from 'react';
import pic from '../images/light.png'
import './style.css'


import CardHome from '../components/CardHome';


const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data) 
   
    return (
        <div style={{margin:'10px',padding:'5px'}}>
       	
  
    <div>
    <img src={pic} alt="Christmas Light" style={{width:'100%',height:"300px",margin:'auto'}}/>
   
    <div className="grid grid-cols-4 gap-10 my-4 container mx-auto">
       {data.slice(0,4).map(p=><CardHome p={p._id} products={p}></CardHome>)}


    </div>
    
<p> 
	If you are not completely satisfied with everything you buy from my site, you can return it for a full refund. 
	<br/>
	<b>No questions asked!</b>
</p>


    </div>
    <aside className="w-1/2">
		<p> This is the aside part of the web page. </p>
		<div style={{width:"100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=150%20W%20University%20Blvd,%20Melbourne,%20FL%2032901+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe></div>
	</aside > 
	
           
           
          
        </div>
    );
};

export default Home;