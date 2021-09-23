import express from "express";
import routes from "../routes";
import ApiController from "../controller/apiController";

const apiRouter = express.Router();
const ac = new ApiController();

apiRouter.get(routes.companyName, ac.getComanyName);

export default apiRouter;
