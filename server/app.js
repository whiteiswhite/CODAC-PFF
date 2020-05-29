var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

const userRouter = require("./routes/User");
const promotionRouter = require("./routes/Promotion");

var app = express();

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://white:bettercalljoy00@cluster0-v3tgs.mongodb.net/codac_pff",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("successfully connected to database");
  }
);

app.use("/user", userRouter);
app.use("/promotion", promotionRouter);

app.listen(5000, () => {
  console.log("express server started");
});
