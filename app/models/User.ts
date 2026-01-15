import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "teacher", "student", "staff"], default: "student" },
  profileImage: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
