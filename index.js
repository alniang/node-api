const express = require("express");
const app = express();
require("./models/dbConfig");
const postRoutes = require("./routes/postsController");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);
app.listen(5500, () => console.log("Server started: 5500"));
