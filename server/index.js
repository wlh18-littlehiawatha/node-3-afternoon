// Require DOTENV to get ENV variable
require('dotenv').config();

const express = require('express');
const massive = require('massive');


// Controller File
const productsCtrl=require('./controllers/products_controller')



// .ENV Variables
const {SERVER_PORT, CONNECTION_STRING} = process.env


// Setup App
const app = express();


// TLM

app.use(express.json());


// Database Connection
// massive will execute this connection upon every single start of the server

massive( {
   connectionString: CONNECTION_STRING,
   ssl: {
     rejectUnauthorized: false,
   },
 }).then((dbInstance) => {
    // set the database instance to app
   app.set('db', dbInstance);
    // log to the console for successful connection
   console.log('Database Connected!')

   app.listen(SERVER_PORT, () => console.log(`Server Running on ${SERVER_PORT}!`))
}).catch(
   err => console.log(err)
);

// EndPoints
// const {getAll, getOne, update, create} = productsCtrl

app.post('/api/products/', productsCtrl.create);
app.get('/api/products/', productsCtrl.getAll);
app.get('/api/products/:id', productsCtrl.getOne);
app.put('/api/products/:id', productsCtrl.update);
app.delete('/api/products/:id', productsCtrl.delete);