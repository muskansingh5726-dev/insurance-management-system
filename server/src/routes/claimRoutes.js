import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  getClaims,
  createClaim,
  deleteClaim,
} from "../controllers/claimController.js";

const router = express.Router();

router.get("/", getClaims);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("CUSTOMER"),
  createClaim
);

router.delete("/:id", deleteClaim);

export default router;