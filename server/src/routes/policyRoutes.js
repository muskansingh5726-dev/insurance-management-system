import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  getPolicies,
  getPolicyById,
  createPolicy,
  deletePolicy,
} from "../controllers/policyController.js";

const router = express.Router();

router.get("/", getPolicies);

router.get("/:id", getPolicyById);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "AGENT"),
  createPolicy
);

router.delete("/:id", deletePolicy);

export default router;