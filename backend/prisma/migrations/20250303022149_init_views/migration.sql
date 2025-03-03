-- CreateTable
CREATE TABLE "VideoViews" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoViews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoLikes" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoLikes_pkey" PRIMARY KEY ("id")
);
