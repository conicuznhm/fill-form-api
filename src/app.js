require("dotenv").config();

const express = require("express");
const cors = require("cors");
const formRoute = require("./routes/form-route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", formRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Sever on port: " + port + "..."));
