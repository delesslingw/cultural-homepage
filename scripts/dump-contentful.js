// scripts/dump-contentful.js
require("dotenv").config(); // loads .env from project root
const fs = require("fs");
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN, // Delivery API token
});

(async () => {
    // Pull everything you currently rely on. You can filter by content_type if you like.
    const res = await client.getEntries({ limit: 1000 }); // bump limit if needed
    fs.writeFileSync("contentful_dump.json", JSON.stringify(res.items, null, 2));
    console.log(`Wrote ${res.items.length} entries to contentful_dump.json`);
})();
