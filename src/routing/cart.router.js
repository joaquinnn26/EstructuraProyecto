import { Router } from "express";

import { addProductToCart, createCart, deleteProduct, deleteProducts, getCart, updateCartProducts } from "../controllers/carts.controller.js";

const router = Router();

/* CREATE CART */
router.post('/', createCart)



/* ADD PRODUCT TO CART */
router.post('/:cid/products/:pid', addProductToCart)




/* GET CART */
router.get('/:cid', getCart)

/*DELETE PRODUCT */

router.delete('/:cid/products/:pid',deleteProduct)

//UPDATE CART PRODUCTS ARRAY
router.put('/:cid',updateCartProducts)


//DELETE ALL PRODUCTS
router.delete('/:cid', deleteProducts)



export default router