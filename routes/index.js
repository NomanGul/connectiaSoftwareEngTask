const express = require("express");
const fibonacci = require("../modules/fibonacci.js");

const router = express.Router();

router.get("/health", async function (_req, res) {
  const data = {
    uptime: process.uptime(),
    message: "ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

router.get("/fib/:number", fibonacci);

module.exports = router;
