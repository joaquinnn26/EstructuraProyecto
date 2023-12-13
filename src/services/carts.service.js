import { cManager } from "../DAL/daos/cartManagerMongo.js";

export const createCart=()=>{
    return cManager.createCart
}

export const getCartProducts=(cid)=>{
    return cManager.getCartProducts(cid)
}

export const addProductToCart=(cid,pid)=>{
    return cManager.addProductToCart(cid,pid)
}

export const deleteProduct=(cid,pid)=>{
    return cManager.deleteProduct(cid,pid)
}

export const updateAllProducts=(cid,arr)=>{
    return cManager.updateAllProducts(cid,arr)

}
export const updateProductQuantity=(cid, pid, quant)=>{
    return cManager.updateProductQuantity(cid,pid,quant)
}

export const deleteAllProducts=(cid,pid)=>{
    return cManager.deleteProduct(cid,pid)
}
