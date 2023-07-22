import React, { useEffect, useState } from 'react';
import CardDeal from '../components/CardDeal';


const Deals = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
   
    return (
        <div>
        <div className="grid grid-cols-4 gap-10 my-4 container mx-auto">
            {data.slice(4).map(p=><CardDeal key={p._id} products={p}></CardDeal>)}

        </div>
        <section  className='container mx-auto my-5'>
		<h1 className="text-xl font-bold">Best Holiday deals</h1>
		<table className="border-separate border border-blue-400 ...">
			<thead>
			  <tr>
				<th className="border border-blue-300 ...">Name of the items</th>
				<th className="border border-blue-300 ...">Original Price</th>
				<th className="border border-blue-300 ...">Today's Deals</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td className="border border-blue-300 ...">Christmas tree</td>
				<td className="border border-blue-300 ...">$200</td>
				<td className="border border-blue-300 ...">$170</td>
			  </tr>
			  <tr>
				<td className="border border-blue-300 ...">bag of lights</td>
				<td className="border border-blue-300 ...">$50</td>
				<td className="border border-blue-300 ...">$40</td>
			  </tr>
			
			</tbody>
		  </table>
		
		 
		<div>
			<h1 className="my-2 text-xl font-bold">Term and Conditions</h1>
			<article className="overflow-scroll border-2 border-blue-500 " style={{height:"300px"}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur odio, tenetur, quod quam nisi eligendi corrupti sequi deleniti harum, amet mollitia quisquam doloribus quia iusto dicta. Quas odio illum at harum libero assumenda, dignissimos iste maxime placeat ad, magnam explicabo. Excepturi ut ipsum minus libero. Excepturi, sapiente odio reiciendis facere consequatur quae soluta voluptates sequi. Laboriosam, exercitationem quae unde consectetur quibusdam labore veritatis perspiciatis reiciendis in enim voluptas nulla dolor, inventore perferendis nemo tempore pariatur illo ullam. Est aut aspernatur recusandae itaque hic, voluptatem temporibus repudiandae? Aut praesentium assumenda reprehenderit harum, ipsum quis debitis maxime commodi dolores repellendus dolorum.
			    Lorem ipsum dolor sit 
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur odio, tenetur, quod quam nisi eligendi corrupti sequi deleniti harum, amet mollitia quisquam doloribus quia iusto dicta. Quas odio illum at harum libero assumenda, dignissimos iste maxime placeat ad, magnam explicabo. Excepturi ut ipsum minus libero. Excepturi, sapiente odio reiciendis facere consequatur quae soluta voluptates sequi. Laboriosam, exercitationem quae unde consectetur quibusdam labore veritatis perspiciatis reiciendis in enim voluptas nulla dolor, inventore perferendis nemo tempore pariatur illo ullam. Est aut aspernatur recusandae itaque hic, voluptatem temporibus repudiandae? Aut praesentium assumenda reprehenderit harum, ipsum quis debitis maxime commodi dolores repellendus dolorum.
			    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia atque culpa assumenda quaerat, dolorum ab officiis voluptas porro rerum animi optio velit expedita tempora eligendi blanditiis nisi aut sit modi vel! Natus molestias atque saepe illo quisquam eos perspiciatis ipsum officiis, dicta repellendus? Culpa atque, ad eos sint excepturi voluptate. Dolorum, illo exercitationem impedit est adipisci minus eveniet consequuntur quae incidunt nulla neque repudiandae, voluptatibus doloremque quis veritatis debitis. Fugiat consequatur aspernatur labore impedit. Omnis reiciendis eaque asperiores totam officia obcaecati illum. Delectus dolore totam, accusantium repudiandae dignissimos provident. Provident odio quidem vitae natus magni exercitationem expedita fugiat illo. amet consectetur adipisicing elit. Delectus quia atque culpa assumenda quaerat, dolorum ab officiis voluptas porro rerum animi optio velit expedita tempora eligendi blanditiis nisi aut sit modi vel! Natus molestias atque saepe illo quisquam eos perspiciatis ipsum officiis, dicta repellendus? Culpa atque, ad eos sint excepturi voluptate. Dolorum, illo exercitationem impedit est adipisci minus eveniet consequuntur quae incidunt nulla neque repudiandae, voluptatibus doloremque quis veritatis debitis. Fugiat consequatur aspernatur labore impedit. Omnis reiciendis eaque asperiores totam officia obcaecati illum. Delectus dolore totam, accusantium repudiandae dignissimos provident. Provident odio quidem vitae natus magni exercitationem expedita fugiat illo. 
			</article>
		
		</div>
	</section> 

        </div>
    );
};

export default Deals;