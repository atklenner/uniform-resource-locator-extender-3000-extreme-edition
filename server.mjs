import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT;
import { nanoid } from "nanoid";
import CyclicDb from "@cyclic.sh/dynamodb";
const db = CyclicDb("mysterious-cyan-long-johnsCyclicDB");

// import morgan from "morgan";

const links = db.collection("links");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  res.send("./form.html");
})

app.post("/extend", async (req, res) => {
  try {
    let link = {
      id: nanoid(),
      url: req.body.url,
    };
    await links.set(link.id, link);
    res.json(link.id);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
})

app.get("*", async (req, res) => {
  try {
    const { props } = await links.get(req.query.id);
    res.redirect(props.url);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
