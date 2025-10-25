const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (_req, res) => res.send("OK"));
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on 0.0.0.0:${PORT}`);
});
