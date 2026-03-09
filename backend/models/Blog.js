import mongoose from "mongoose";
import { type } from "os";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [100, "Titile must not be more than 100 chracters"],
    },
    slug: {
      type: String,
      unique: [true, "Title already taken. Use another title"],
    },
    content: {
      type: String,
      required: [true, "content is required"],
    },
    category: {
      type: String,
      enums: ["table", "chair", "sofa", "bed", "cupboard"],
    },
    coverImage: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enums: ["draft", "published"],
      default: "draft",
    },
    likes: {
      type: Number,
      default: 0,
    },
    postedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

blogSchema.pre("save", function () {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
});

export default mongoose.model("Blog", blogSchema);
