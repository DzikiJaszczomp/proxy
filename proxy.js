const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("");
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Proxy app listening on port ${port}!`));

// https://gameinfo.albiononline.com/api/gameinfo/search?q=
