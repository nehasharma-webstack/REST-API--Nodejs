const express = require("express");
const postRoutes = require("./routes/posts");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(postRoutes);
app.listen(8080);
