const express = require("express");
const router = express.Router();

const {addPostFile} = require("./TodoController")

router.route("/").post(addPostFile);

module.exports = router;