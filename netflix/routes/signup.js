// 로컬호스트/api/signup
const router = require("express").Router();

// router.post("/api/")

router.post("/", (req, res) => {
  console.log(req.body.ID);
  res.end();
});

module.exports = router;
