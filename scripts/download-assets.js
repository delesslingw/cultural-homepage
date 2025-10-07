// scripts/download-assets.js
const fs = require("fs");
const path = require("path");
const https = require("https");

const dump = JSON.parse(fs.readFileSync("contentful_dump.json", "utf8"));

// collect all asset URLs referenced in fields.file.url (deduped)
const urls = new Set();
for (const item of dump) {
    const walk = (v) => {
        if (!v) return;
        if (Array.isArray(v)) return v.forEach(walk);
        if (typeof v === "object") {
            // contentful asset object?
            if (v.fields?.file?.url) {
                const raw = v.fields.file.url.startsWith("http") ? v.fields.file.url : `https:${v.fields.file.url}`;
                urls.add(raw);
            }
            Object.values(v).forEach(walk);
        }
    };
    Object.values(item.fields || {}).forEach(walk);
}

const outDir = path.join(__dirname, "..", "public", "assets");
fs.mkdirSync(outDir, { recursive: true });

function dl(url) {
    return new Promise((resolve, reject) => {
        const filename = path.basename(new URL(url).pathname);
        const dest = path.join(outDir, filename);
        const file = fs.createWriteStream(dest);
        https
            .get(url, (res) => {
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    // follow redirect
                    res.resume();
                    return resolve(dl(res.headers.location));
                }
                if (res.statusCode !== 200) {
                    res.resume();
                    return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                }
                res.pipe(file);
                file.on("finish", () => file.close(() => resolve(dest)));
            })
            .on("error", reject);
    });
}

(async () => {
    console.log(`Found ${urls.size} asset URLs`);
    for (const url of urls) {
        try {
            const dest = await dl(url);
            console.log("Saved", path.basename(dest));
        } catch (e) {
            console.error("Failed", url, e.message);
        }
    }
})();
