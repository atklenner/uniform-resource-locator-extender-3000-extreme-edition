import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT;
import { nanoid } from "nanoid";

const db = {
  "abcd": "https://expressjs.com/"
};

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("./form.html");
})

app.post("/extend", (req, res) => {
  let id = nanoid(10);
  db[id] = req.body.url;
  res.json(id);
})

app.get("*", (req, res) => {
  const url = db[req.query.id];
  res.redirect(url);
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
