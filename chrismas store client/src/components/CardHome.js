import React, { useEffect, useState } from 'react';


const CardHome = ({products}) => {
	console.log(products)
	
   
    return (
        <div className="rounded overflow-hidden shadow-lg">
		<img className="w-full" src={products.img} alt="Recipes"/>
		<div className="px-6 py-4">
		  <div className="font-bold text-xl mb-2">{products.name}</div>
		  <p className="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
		  </p>
		  <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$100-$500</span>

		</div>
	
	  </div>
    );
};

export default CardHome ;