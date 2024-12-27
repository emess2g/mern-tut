import Product from '../models/product.models.js';
import mongoose from 'mongoose';

export const getAllProducts =  async(req, res) => {
    try {
       const product = await Product.find({});
       res.status(200).json({success: true, data: product})
    } catch (error) {
        console.log("error fetching products", error.message);
        res.status(500).json({success: false, message: "Server error"})
    } 
}


export const getProducts =  async (req, res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ sucess:false, message:"Please provide all fields"})
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save()
        res.status(201).json({ success:true, data: newProduct})
    } catch (error) {
        console.error('Error in creating product:', error);
        res.status(500).json({ success:false, message:"Server error"})
    }
}

export const updateProduct =  async(req, res) => {
    const {id} = req.params;
    console.log(":id",id);
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Product ID" });
}

    try {
       const updatedProduct =  await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({ success: true, data: updatedProduct})
    } catch (error) {
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const deleteProducts = async(req,res) =>{
    const {id} = req.params;
    console.log('id', id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Product ID" });
}

const product = await Product.findByIdAndDelete(id);
    if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
     }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted"})
    } catch (error) {
        res.status(404).json({success: false, message: "Product not found"})
    }
}