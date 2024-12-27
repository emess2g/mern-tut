import express from 'express';
import  dotenv from 'dotenv';
import { connectDB } from './Config/db.js';
// import Product from './models/product.models.js';
// import mongoose from 'mongoose';
import productRoutes from './routes/product.routes.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json()) //middleware - allows us to accept json data in the req.body

app.use("/api/products",productRoutes)


app.listen(PORT, ()=>{
    connectDB()
    console.log('Server started at http://localhost:' + PORT);
    
})


