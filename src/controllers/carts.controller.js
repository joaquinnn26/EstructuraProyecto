import { createCart,getCartProducts,addProductToCart,deleteProduct,deleteAllProducts,updateAllProducts,updateProductQuantity  } from "../services/carts.service";


export const createCart= async (req, res)=>{
    try {        
        const response = createCart()
        res.status(200).json({message: 'Cart created', cart: response })
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }}

export const addProductToCart=async (req, res) =>{    
        try{
            const {cid, pid} = req.params        
            const response = addProductToCart(cid, pid)        
            res.status(200).json({message: "Product added to cart", productAdded: response})        
        console.log(response)
        }
    
        catch(error){
            res.status(500).json({ message: error.message });
        }
    }
export const getCart=async (req, res)=>{
        try {
            const { cid } = req.params
            const response = getCartProducts(cid)      
            res.status(200).json({message: 'Cart founded', cartProducts: response.products });
        }
        catch (error){
            res.status(500).json({ message: error.message });
        }
    }
export const deleteProduct=async (req,res)=>{
        try {
            const { cid , pid } = req.params
            const cart =deleteProduct(cid,pid)
            res.status(200).json({message: 'product deleted', cart  })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

export const updateCartProducts=async (req, res)=>{
        try {
            const { cid } = req.params
            const { products } = req.body
            const response = updateAllProducts(cid, products)        
            res.status(200).json({ message: 'Products updated', cart: response })
        }
        catch (error){
            res.status(500).json({ message: error.message });
        }
    }
export const deleteProducts=async (req, res) =>{    
        try{
            const { cid } = req.params        
            const response = deleteAllProducts(cid)        
            res.status(200).json({message: "Products deleted", cart: response})             
        }
        catch(error){
            res.status(500).json({ message: error.message });
        }
    }