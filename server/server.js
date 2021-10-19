require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "Trung",
    address: "HN",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
