import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getCustomers,
  getCustomerById,
  createCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/", authMiddleware, getCustomers);

router.get("/:id", authMiddleware, getCustomerById);

router.post("/", authMiddleware, createCustomer);

export default router;