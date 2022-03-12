const express = require("express");
const Submission = require("../models/submission.models");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const submission = await Submission.find()
      .populate({
        path: "evaluation_id",
        select: { date_of_evaluation: 1, _id: 0 },
      })
      .populate({
        path: "student_id",
        select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .lean()
      .exec();
    return res.status(200).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post("", async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    return res.status(200).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id).lean().exec();
    return res.status(200).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    return res.status(200).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndDelete(req.params.id);
    return res.status(200).send(submission);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
