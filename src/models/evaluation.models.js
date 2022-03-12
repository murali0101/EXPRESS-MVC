const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: String, required: true },

    instructor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Evaluation = mongoose.model("evaluation", evaluationSchema);
module.exports = Evaluation;
// roll id, current batch, createdAt, updatedAt
