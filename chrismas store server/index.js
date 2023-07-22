const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rf3gx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log('Database Connected Successfully')
        const database = client.db('chrismasStore');
        const productCollection = database.collection('products');
    
        // Get Api
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({});
            const products = await cursor.toArray();
            res.send(products)
        })
        app.get('/products/:id', async (req, res) => {
            
            const id = req.params.id;
            console.log(id)
            const query = { _id: new ObjectId(id) };
            const product = await productCollection.findOne(query);
            res.json(product)


        })


        //post api
        app.post('/products', async (req, res) => {
            const product = req.body;
               const result = await productCollection.insertOne(product);
               res.json(result);})
        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productCollection.deleteOne(query);
            res.json(result)
        })
        app.put('/products/:id', async (req, res) => {
            const id = req.params.id;
                const updateUser = req.body;
                const filter = { _id: new ObjectId(id) };
                const options = { upsert: true };
                const updateDoc = {
                    $set: {
                        status: updateUser.status = "Sold"
                    },
                };
                const result = await productCollection.updateOne(filter, updateDoc, options);
                res.send(result)
    

            
           
           
        })
        
    } 
    finally {
       
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Running chrismas_store wonderfully')
});
app.listen(port, () => {
    console.log('Running volunteer network on port', port)
})