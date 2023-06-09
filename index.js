const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("funciona piola"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3001, ()=> {
    console.log("running")
});