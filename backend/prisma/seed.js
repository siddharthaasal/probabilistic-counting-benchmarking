import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// fetch db size from cli args (default 10K)
const datasetSize = parseInt(process.argv[2]) || 10000;

async function main() {
    console.log(`Seeding database with ${datasetSize} views`);

    // delete existing data
    await prisma.videoViews.deleteMany();
    await prisma.videoLikes.deleteMany();
    await prisma.videoMetrics.deleteMany();

    // Seed VideoMetrics (Aggregated count)
    await prisma.videoMetrics.createMany({
        data: [
            { videoId: "vid1", views: datasetSize, likes: Math.floor(datasetSize * 0.3) },
            { videoId: "vid2", views: datasetSize, likes: Math.floor(datasetSize * 0.4) },
        ],
    });

    // Seed VideoViews (Individual view records)
    const viewsData = [];
    for (let i = 0; i < datasetSize; i++) {
        viewsData.push({
            videoId: i % 2 === 0 ? "vid1" : "vid2",
            userId: `user${i}`,
            timestamp: new Date(),
        });
    }
    await prisma.videoViews.createMany({ data: viewsData });

    // Seed VideoLikes (Individual like records)
    const likesData = [];
    for (let i = 0; i < Math.floor(datasetSize * 0.3); i++) {
        likesData.push({
            videoId: i % 2 === 0 ? "vid1" : "vid2",
            userId: `user${i}`,
            timestamp: new Date(),
        });
    }
    await prisma.videoLikes.createMany({ data: likesData });

    console.log(`Seeding completed for ${datasetSize} views!`);

}


main()
    .catch((error) => {
        console.error("Error seeding database:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });