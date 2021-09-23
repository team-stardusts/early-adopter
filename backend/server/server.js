import "../config/env-config";
import express from "express";
import dotenv from "dotenv";
import sample from "../../share/config";

const app = express();

const getData = (req, res) => {
    const data = {
        companyname: "StarDusts",
    };
    res.json(data);
};

app.get("/api/companyname", getData);

export default app;
