const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "evaluation",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    mark: { type: Number, required: true }
  },
  {
    timestamps: true,
  }
);
const Submission = mongoose.model("submission", submissionSchema);
module.exports = Submission;
// roll id, current batch, createdAt, updatedAt
