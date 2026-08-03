import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  getPayments,
  createPayment,
  deletePayment,
} from "../controllers/paymentController.js";

const router = express.Router();

router.get("/", getPayments);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createPayment
);
router.delete("/:id", deletePayment);

export default router;