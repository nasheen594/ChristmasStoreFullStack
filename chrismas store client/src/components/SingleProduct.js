import React from 'react';


const SingleProduct = (props) => {
    const { name, _id, price, status,img } = props.products
    const { handleDelete, handleUpdate } = props
    return (
        <div className="rounded overflow-hidden shadow-lg">
		<img className="w-full" src={img} alt="products"/>
		<div className="px-6 py-4">
        <h6 className="font-bold text-right text-xl mb-2">Status:<span className="font-bold text-yellow-500 text-2xl mb-2">{status}</span></h6>
		  <div className="font-bold text-xl mb-2">{name}</div>
		  <p className="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
		  </p>
		  <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
          <br/>
          <button className="rounded-xl text-white font-bold bg-red-600 ring-2 ring-blue-500 p-2 my-2" onClick={() => handleDelete(_id)} >Delete</button>
        <button className=" ms-4 rounded-xl text-white font-bold bg-green-600 ring-2 ring-blue-500 p-2 my-2" onClick={() => handleUpdate(_id)} >Update</button>

		</div>
	
	  </div>
    );
};

export default SingleProduct;