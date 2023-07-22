import React, { useEffect, useState } from 'react';

import SingleProduct from '../components/SingleProduct';
const ManageTProducts=()=>{
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:8000/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you sure you want to delete?')
                    const remaining = products.filter(p => p._id !== id)
                    setProducts(remaining)

                }

            })

    }
    const handleUpdate = id => {
        const url = `http://localhost:8000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload()



                }
            })

    }
    return (
        <div>
             <h2 className="font-bold text-center text-2xl text-blue-600 mt-3"> Products</h2>
            <div className="grid grid-cols-4 gap-10 my-4 container mx-auto">

                
                {products?.map(p => <SingleProduct
                    key={p._id}
                    products={p}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}>
                </SingleProduct>)}

            </div>

        </div>
    );
};







export default ManageTProducts;