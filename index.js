import express from "express";
import cors from "cors";
import db from "./models/index.js";

import "dotenv/config";

const app = express();
// const routes = require("./routes");

db.sequelize.sync();

app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", routes);

app.get("/", async (req, res) => {});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
