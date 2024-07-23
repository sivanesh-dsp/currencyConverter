const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

app.get("/api-key", (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
