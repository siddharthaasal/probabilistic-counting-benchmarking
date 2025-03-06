import express from "express";
import { cms } from "../../utils/cms.js";

const router = express.Router();

// Route to add a view
router.post("/:videoId", (req, res) => {
    const { videoId } = req.params;

    cms.addView(videoId);
    res.json({ message: `View added for video ${videoId}` });
});

// Route to get estimated total views
router.get("/:videoId", (req, res) => {
    const { videoId } = req.params;

    const estimatedViews = cms.getTotalViews(videoId);
    res.json({ videoId, estimatedViews });
});

export default router;
