import "../config/env-config";
import express from "express";
import dotenv from "dotenv";
import routes from "../routes";
import apiRouter from "../routers/apiRouter";

const app = express();

app.use(routes.api, apiRouter);

export default app;
