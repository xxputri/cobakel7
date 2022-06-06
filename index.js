const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const staticpath = path.join(__dirname, "/");

var antares = require("antares-http");

app.use(express.static(staticpath));

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/cobacoba.html");
});

app.get("/api", function (req, res) {
  antares.setAccessKey("5d732e2e23fb4dcc:fcdf2e82d9f1f827");
  antares.get("smartglass", "ldrsensor").then(function (response) {
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);
