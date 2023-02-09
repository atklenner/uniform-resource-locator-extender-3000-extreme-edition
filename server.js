const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;

const db = {
  "abcd": "https://expressjs.com/"
};

app.use(express.static("public"));
app.use(express.urlencoded("extended"));

app.get("/", (_req, res) => {
  res.send("./form.html");
})

app.post("/extend", (req, res) => {
  console.log(req.body);
  res.redirect("/");
})

app.get("/:stuff", (req, res) => {
  const url = db[req.params.stuff];
  res.redirect(url);
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
