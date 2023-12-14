import { Router } from "express";
import { manager } from "../daos/productManagerMongo.js";
import { getProducts,getProductsById,addProduct,deleteProduct,updateProduct } from "../controllers/products.controller.js";
const router = Router();


/* GET PRODUCTS */
router.get("/",getProducts);



/* GET PRODUCTS BY ID */
router.get('/:id', getProductsById)



/* ADD PRODUCT */
router.post("/", addProduct);



/* DELETE PRODUCT */
router.delete("/:idProduct", deleteProduct);






/* UPDATE PRODUCT */
router.put("/:idProduct",updateProduct);



export default router