const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batch_name: { type: String, required: true },

    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Batch = mongoose.model("batch", batchSchema);
module.exports = Batch;
// roll id, current batch, createdAt, updatedAt
