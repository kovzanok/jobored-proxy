import express from "express";
import cors from "cors";
const app = express();
const port = 3001;
app.use(
  cors({
    origin: true,
  })
);
app.listen(port, () => {
  console.log("Server started");
});
