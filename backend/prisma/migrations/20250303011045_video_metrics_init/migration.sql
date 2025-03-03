-- CreateTable
CREATE TABLE "VideoMetrics" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoMetrics_pkey" PRIMARY KEY ("id")
);
