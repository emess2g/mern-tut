import express from "express";
import { deleteProducts, getAllProducts, getProducts, updateProduct } from "../controllers/product.controllers.js";
const router = express.Router();

// get method
router.post('/', getProducts)

// DELETE PRODUCT
router.delete("/:id", deleteProducts)

// GET ALL PRODUCT
router.get("/", getAllProducts)

// UPDATE A PRODUCT
router.put("/:id", updateProduct)

// console.log(process.env.MONGO_URL);

export default router;