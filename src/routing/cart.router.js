import { Router } from "express";

import { addProduct, create, deleteP, deleteProducts, getCart, updateCartP} from "../controllers/carts.controller.js"

const router = Router();

/* CREATE CART */
router.post('/', create)



/* ADD PRODUCT TO CART */
router.post('/:cid/products/:pid', addProduct)




/* GET CART */
router.get('/:cid', getCart)

/*DELETE PRODUCT */

router.delete('/:cid/products/:pid',deleteP)

//UPDATE CART PRODUCTS ARRAY
router.put('/:cid',updateCartP)


//DELETE ALL PRODUCTS
router.delete('/:cid', deleteProducts)



export default router