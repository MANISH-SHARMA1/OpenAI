const express = require("express");
const dbConnect = require("./utils/dbConnect");
const cors = require("cors");
const morgan = require("morgan");
const chatRoute = require("./router/Router");
const responseChatRoute = require("./router/ResponseRouter");

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/chat", chatRoute);
app.use("/responseChat", responseChatRoute);

const PORT = process.env.PORT || 4000;

dbConnect();

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
