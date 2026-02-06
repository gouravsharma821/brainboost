import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    email: String,
    mobile: String,
    firstName: String,
    lastName: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);