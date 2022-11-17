// 로컬호스트/api

const router = require("express").Router();

const signup = require("./signup.js");

router.use("/signup", signup);

//
module.exports = router;
