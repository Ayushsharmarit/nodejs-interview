const fs = require('fs').promises;
const path = require('path');

const directoryPath = "./";

async function listFiles() {
    try {
        const files = await fs.readdir(directoryPath);
        console.log("Files in directory:");

        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const stats = await fs.stat(filePath); // Use async/await
            // console.log(stats)
            if (stats.isFile()) {
                console.log(file);
            }
        }
    } catch (err) {
        console.error("Error reading directory:", err);
    }
}

listFiles();
