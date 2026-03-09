import express from "express";
import {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.route("/blog").get(getAllBlogs);
router.route("/blog").post(createBlog);

router.route("/blog/:id").get(getBlog);
router.route("/blog/:id").delete(deleteBlog);
router.route("/blog/:id").patch(updateBlog);

export default router;
