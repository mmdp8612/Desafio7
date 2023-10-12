import { Router } from "express";
import { 
    getAllProducts, 
    getProductById, 
    postProduct, 
    updateProduct, 
    deleteProduct 
} from "../controllers/products.controller.js";

const router = Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;