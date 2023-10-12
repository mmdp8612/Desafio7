import { Router } from "express";
import {
    createCart,
    getProductsCart,
    addProductCart,
    updateQuantityCart,
    updateProductsCart,
    deleteProductCart,
    deleteAllProducts
} from "../controllers/cart.controller.js";

const router = Router();

router.post("/", createCart);
router.get("/:cid", getProductsCart);
router.post("/:cid/:pid", addProductCart);
router.put("/:cid", updateProductsCart);
router.put("/:cid/:pid", updateQuantityCart);
router.delete("/:cid/:pid", deleteProductCart);
router.delete("/:cid", deleteAllProducts);

export default router;