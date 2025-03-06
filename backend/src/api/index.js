import express from "express";
import viewsBruteForce from "./totalViews/bruteForce.js";
import cmsViews from "./totalViews/cms.js"

const router = express.Router();

router.use("/totalViewsBruteForce", viewsBruteForce);
router.use("/cmsViews", cmsViews);

export default router;
