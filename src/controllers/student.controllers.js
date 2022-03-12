const express = require("express")
const Student = require("../models/student.models")
const router=express.Router()
router.get("", async (req, res) => {
  try {
    const students = await Student.find()
      .populate({ path: "user_id", select:{firstName:1,lastName:1,_id:0} })
      .lean()
      .exec();
    return res.status(200).send(students);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post("", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate({
        path: "user_id",
        select: { firstName: 1, lastName: 1, _id: 0 },
      })
      .lean()
      .exec();
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;