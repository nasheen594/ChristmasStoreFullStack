import React, { useEffect, useState } from 'react';


const CardDeal = ({products}) => {
	console.log(products)
	
   
    return (
        <div className="rounded overflow-hidden shadow-lg">
		<img className="w-full" src={products.img} alt="Recipes"/>
		<div className="px-6 py-4">
		  <div className="font-bold text-xl mb-2">{products.name}</div>
		  <p className="text-gray-700 text-base">
			Lorem ipsum dolor sit amet
		  </p>
          <span className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{products.discount}%</span>

		</div>
	
	  </div>
    );
};

export default CardDeal ;