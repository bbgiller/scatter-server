import express from "express";
import { places } from "./places";

const app = express();
const port = 9000;


app.get('/', (_req, res) => res.send('Scatter Live!'));
app.get("/places", (_req, res) => {
  res.send(places);
});
app.listen(port);

console.log(`[app] : http://localhost:${port}`);