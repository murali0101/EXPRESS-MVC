const express =require("express")
const usersController = require("./controllers/user.controllers")
const studentController = require("./controllers/student.controllers")
const batchController = require("./controllers/batch.controllers")
const evaluationController = require("./controllers/evaluation.controllers");
const submissionController = require("./controllers/submission.controllers");
const app=express();
app.use(express.json())
app.use("/users", usersController);
app.use("/students", studentController);
app.use("/batch", batchController);
app.use("/evaluation", evaluationController);
app.use("/submission", submissionController);
module.exports = app;