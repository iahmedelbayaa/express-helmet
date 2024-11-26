const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello helmet");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
