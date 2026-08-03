import express from "express";
import upload from "../middleware/upload.js";

import {
  uploadDocument,
  getDocuments,
} from "../controllers/documentController.js";

const router = express.Router();

router.get("/", getDocuments);

router.post(
  "/",
  upload.single("file"),
  uploadDocument
);

export default router;