const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys");
const items = require("./routes/api/itemRoutes");

const app = express();

// * parse post/put requests *
app.use(bodyParser.json());

// connect to db
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// api routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
