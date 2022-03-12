const express = require("express");
const User = require("../models/user.models");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
