import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: String,
  section: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

export default mongoose.models.Class || mongoose.model("Class", classSchema);
