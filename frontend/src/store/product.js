import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({products}),
  createProduct: async (newProduct) => {
     if(!newProduct.name || !newProduct.price || !newProduct.image){
      return { success:false, message: "Please provide all fields."}
     }
     const res = await fetch("http://localhost:5000/api/getProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
     })
     const data = await res.json();
     set((state) => ({products: [...state.products, data.data]   }));
     return { success:true, message: "Product created successfully."}
  }

}))