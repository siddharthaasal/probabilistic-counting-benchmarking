import fetch from "node-fetch";

const seedCMS = async (videoId, numViews) => {
    console.log(`Seeding ${numViews} views for video: ${videoId}`);

    for (let i = 0; i < numViews; i++) {
        try {
            const response = await fetch(`http://localhost:3000/api/cmsViews/${videoId}`, {
                method: "POST"
            });

            const text = await response.text(); // Get raw text
            // console.log(`Response ${i + 1}:`, text);

            if (i % 1000 === 0) {
                console.log(`Sent ${i} requests`);
                await new Promise((resolve) => setTimeout(resolve, 1)); // Small delay
            }
        } catch (error) {
            console.error(`Error at request ${i + 1}:`, error);
        }
    }

    console.log("Seeding completed.");
};

const runSeed = async () => {
    // await seedCMS("video1K", 10 ** 3);
    // await seedCMS("video1K", 10 ** 4);
    // await seedCMS("video1K", 10 ** 5);
    await seedCMS("video1K", 10 ** 6);
};

runSeed();
