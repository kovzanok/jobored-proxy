import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import requestIp from "request-ip";
const app = express();
const port = 3001;
const apiUrl='https://api.superjob.ru/'
app.use(
  cors({
    origin: true,
  })
);

app.use(requestIp.mw());

app.use(
  "/",
  proxy(apiUrl, {
    https: true,
  })
);
app.listen(port, () => {
  console.log("Server started");
});
