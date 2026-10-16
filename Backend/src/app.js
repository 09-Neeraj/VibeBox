const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const musicRoute =require("./routes/music.route");
const profileRoute =require("./routes/profile.route");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
     cors({
          origin:"http://localhost:5173",
          credentials:true,
     })
)

app.use("/api/auth", authRoute);
app.use("/api/music", musicRoute);
app.use("/api/user", profileRoute)
module.exports = app;