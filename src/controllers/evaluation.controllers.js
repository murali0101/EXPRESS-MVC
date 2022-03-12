const express = require("express");
const Evaluation = require("../models/evaluation.models");
const Submission = require("../models/submission.models");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const evaluation = await Evaluation.find()
      .populate({
        path: "instructor_id",
        select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .populate({
        path: "batch_id",
        select: { batch_name: 1, _id: 0 },
      })
      .lean()
      .exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post("", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id).lean().exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/particular/:id", async (req, res) => {
  try {
    const evaluation = await Submission.find({ evaluation_id: req.params.id },{mark:0})
      .populate({
        path: "evaluation_id",
        select: { date_of_evaluation: 1, },
      })
      .populate({
        path: "student_id",
        select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .lean()
      .exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/particular/highscore/:id", async (req, res) => {
  try {
    const evaluation = await Submission.find({ evaluation_id: req.params.id })
      .sort({ mark: -1 })
      .limit(1)
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
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.id);
    return res.status(200).send(evaluation);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
