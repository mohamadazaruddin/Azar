import mongoose from "mongoose";
const contactModel = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
export const Contact =
  mongoose.models.contact || mongoose.model("portfolio-reviews", contactModel);
