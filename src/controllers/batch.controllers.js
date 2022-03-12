const express = require("express");
const Batch = require("../models/batch.models");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const batches = await Batch.find()
      .populate({
        path: "student_id",
        select: { roll_id: 1, _id: 0 },
        populate: { path: "user_id", select: { firstName: 1, lastName: 1, _id: 0 } },
      })
      .lean()
      .exec();
    return res.status(200).send(batches);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post("", async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(200).send(batch);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id).lean().exec();
    return res.status(200).send(batch);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(batch);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);
    return res.status(200).send(batch);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
