const express = require("express");
const helmet = require("helmet");
require("dotenv").config()
const mongoose = require("mongoose");
const routes = require("./routes/book");

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use("/api", routes);
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    
    

    app.listen(port, () => {
      console.log("Server running on  "+port);
    });
  });