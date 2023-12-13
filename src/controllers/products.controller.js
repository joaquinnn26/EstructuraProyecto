import { manager } from "../DAL/daos/productManagerMongo.js";

export const getProducts=async (req, res) => {
    try {
        const products = await manager.findAll(req.query);
        res.status(200).json({ message: "Products found", products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductsById=async (req, res) => {
    try{
        const {id} = req.params
        const productById = await manager.findById(id)        
        res.status(200).json({ message: "Product found", productById });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }        
}

export const addProduct=async (req, res) => {
    try {
    const createdProduct = await manager.createOne(req.body);
    res
        .status(200)
        .json({ message: "Product created", product: createdProduct });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

export const deleteProduct=async (req, res) => {
    const { idProduct } = req.params;
    try {
        await manager.deleteOne(idProduct);
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct=async (req, res) => {
    const { idProduct } = req.params;
    try {
        await manager.updateOne(idProduct, req.body);
        res.status(200).json({ message: "Product updated"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}