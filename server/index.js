const port = require("./config");
const express = require("express");
const router = require("./routes/task.routes");

const app = express();

app.use(express.json()); //permite a express entender json
app.use(router);

app.listen(port, () => {
  console.log("Server on port:" + port);
});
