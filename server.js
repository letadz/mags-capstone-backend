const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileupload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(express.json());
app.use(cors());
app.use(
  fileupload({
    useTempFiles: true,
  })
);
//Routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//Databases
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running");
});
