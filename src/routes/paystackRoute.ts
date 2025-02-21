import { Router } from "express";
import { verifyPaymentHandler } from "../controller/paystackController";

const router = Router();

router.post("/tick", verifyPaymentHandler);

export default router;
