const express = require('express');
const cors = require("cors");
require('dotenv').config();
const connectToDatabase =require("./database")
const router = require("./TodoRouter")


const app = express();
const PORT = process.env.PORT || 3005;
app.use(cors());

connectToDatabase();

app.use("/post",router ,);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


