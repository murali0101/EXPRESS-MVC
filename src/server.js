const app = require("./index");

const connect = require("./configs/db.js");
app.listen(8000, async () => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 8000");
});
