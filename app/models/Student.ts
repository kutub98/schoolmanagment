import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  enrolledDate: Date,
  attendance: [{ date: Date, status: String }],
  results: [{ subject: String, marks: Number }],
  certificates: [{ title: String, file: String }],
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  counselingNotes: [{ date: Date, note: String }],
});

export default mongoose.models.Student || mongoose.model("Student", studentSchema);
