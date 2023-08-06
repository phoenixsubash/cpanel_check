const express = require("express");

app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ inflate: false }));

app.get("/health", (req, res) => {
  console.log("req", req);
  res.json({ check: "Hello World!!!" });
});

app.listen(process.env.PORT || 3000);
