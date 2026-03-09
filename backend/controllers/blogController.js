import mongoose from "mongoose";
import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (!blogs.length > 0) {
      return res.status(200).json({
        success: false,
        message: "Blogs not found",
      });
    }

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    if (!blog) {
      return res.status(200).json({
        success: false,
        message: "Blogs not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "New blog created",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(400).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(400).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog successfully deleted.",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, content, category, coverImage } = req.body;
    const updateData = {};

    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (category !== undefined) updateData.category = category;
    if (coverImage !== undefined) updateData.coverImage = coverImage;
    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      returnDocument: "after",
      validators: true,
    });

    if (!blog) {
      return res.status(400).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog successfully updated.",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};
