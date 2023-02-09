const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;

const db = {
  "abcd": "https://expressjs.com/"
};

app.get("/", (_req, res) => {
  res.send("pong");
})

app.get("/:stuff", (req, res) => {
  const url = db[req.params.stuff];
  res.redirect(url);
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
