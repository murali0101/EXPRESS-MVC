const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: String, required: true },
    current_batch: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Student = mongoose.model("student", studentSchema);
module.exports = Student;
// roll id, current batch, createdAt, updatedAt
