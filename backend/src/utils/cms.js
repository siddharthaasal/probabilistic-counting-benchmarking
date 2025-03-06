import crypto from "crypto";

class CountMinSketch {
    constructor(depth = 5, width = 1000) {
        this.depth = depth; // Number of hash functions
        this.width = width; // Number of counters per row
        this.table = Array.from({ length: depth }, () => new Array(width).fill(0));
        this.seed = Array.from({ length: depth }, () => Math.floor(Math.random() * 100000));
    }

    // Hash function (using different seeds for each row)
    hash(videoId, i) {
        const hash = crypto.createHash("md5").update(videoId + this.seed[i]).digest("hex");
        return parseInt(hash, 16) % this.width; // Maps to a column in sketch
    }

    // Add a view (increment count)
    addView(videoId) {
        console.log(`Adding view for: ${videoId}`);
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(videoId, i);
            this.table[i][index] += 1;
        }
    }

    // Get estimated total views (minimum count across hash rows)
    getTotalViews(videoId) {
        let minCount = Infinity;
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(videoId, i);
            minCount = Math.min(minCount, this.table[i][index]);
        }
        return minCount;
    }
}

// Singleton instance (shared across API calls)
const cms = new CountMinSketch();

export { cms };
