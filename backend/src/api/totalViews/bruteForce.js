import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Route to get exact view count for a video
router.get("/:videoId", async (req, res) => {
    const { videoId } = req.params;

    try {
        const viewCount = await prisma.videoViews.count({
            where: { videoId }
        })
        res.json({ videoId, viewCount });
    } catch (error) {
        console.error("Error fetching vieo views: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;  