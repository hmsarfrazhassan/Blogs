import express from "express";
import upload from "../middlewares/uploadImage.js";
import { uploadImage } from "../controllers/uploadImageController.js";

const router = express.Router();
router.post("/upload", upload.single("image"), uploadImage);

export default router;
