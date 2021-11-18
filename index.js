require('dotenv').config();
const app = require("./server");

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`app has started on port ${port}`)
});