import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subjects: [String],
  assignedClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
});

export default mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);
