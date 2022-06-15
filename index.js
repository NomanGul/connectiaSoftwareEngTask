const express = require("express");
const app = express();
const routes = require("./routes/index.js");

app.use("/api", routes);

app.use((_req, res) => {
  return res.status(404).json({ error: "resource not found" });
});

app.use((err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json({ error: "internal server error" });
});

const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;
