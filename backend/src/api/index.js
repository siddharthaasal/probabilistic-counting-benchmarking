import express from "express";
import viewsBruteForce from "./totalViews/bruteForce.js";

const router = express.Router();

router.use("/totalViewsBruteForce", viewsBruteForce);

export default router;
