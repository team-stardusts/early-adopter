const express = require("express");

const app = express();
const PORT = 4000;

const getData = (req, res) => {
    const data = {
        companyname: "StarDusts",
    };
    res.json(data);
};

const handleListening = () => {
    console.log(`Listening on http://localhost:${PORT}`);
};

app.get("/api/companyname", getData);

app.listen(PORT, handleListening);
