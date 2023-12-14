const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 5500;

// Global Axios instance
const rapidApiAxios = axios.create({
  baseURL: "https://dictionary-data-api.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "f7a64865cbmshad4e4feb88d4837p1b8e61jsndbdb8a525f4d",
    "X-RapidAPI-Host": "dictionary-data-api.p.rapidapi.com",
  },
});

app.get("/", (req, res) => {
  return res.sendFile("public/index.html", { root: __dirname });
});
debugger;
app.get("/searchword", async (req, res) => {
  const { entry } = req.query;
        const wordInput = entry;
  try {
    const response = await rapidApiAxios.get(`/definition/${entry}`, {
      params: { word: entry },
    });

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:${port}`);
});
