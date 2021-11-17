const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// app.use(espress.json());

app.listen(6000, () => {
  console.log('app has started on 6000')
})