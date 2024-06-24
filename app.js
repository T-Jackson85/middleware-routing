const express = require('express');
const app = new express();
const ExpressError = require("./expressError")

const routes  = require("./routes")
app.use(routes)

app.use(express.json());
app.use("/items", routes);

/** 404 handler */

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

/**  error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});


module.exports = app








