require("dotenv").config();
const path = require("path");
const express = require("express");
const contentful = require("contentful");
const sslRedirect = require("heroku-ssl-redirect").default;

const app = express();
const PORT = process.env.PORT || 3333;
const isProd = process.env.NODE_ENV === "production";

// ---- Contentful client ----
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
});

// ---- App state ----
let CONTENT = [];
let DIRECTORY = [];
let HTMLdata = undefined; // only used in prod for meta routes

// ---- Helpers ----
const stringFromRichText = (rt) => {
    const richTextToString = (obj) => {
        if (obj.value) return obj.value;
        return obj.content.reduce((acc, curr) => `${acc}${richTextToString(curr)}`, "");
    };
    return richTextToString(rt).replaceAll('"', "");
};

const genHTML = (config) => {
    if (!HTMLdata) return null; // not ready (e.g., dev or build not read yet)
    return Object.keys(config).reduce((acc, curr) => acc.replaceAll(curr, config[curr]), HTMLdata);
};

const requireContent = (res) => {
    if (!CONTENT[0] || !CONTENT[0].fields) {
        res.status(503).json({ error: "Content not loaded yet. Try again shortly." });
        return false;
    }
    return true;
};

// ---- Middleware ----
if (isProd) {
    // Only force HTTPS on Heroku/production
    app.use(sslRedirect());
}

app.use(express.json());

// ---- API routes ----
app.get("/api/directory", (_req, res) => {
    res.send(DIRECTORY || []);
});

app.get("/api", (_req, res) => {
    res.send(CONTENT || []);
});

// ---- Meta/HTML routes (work only when HTMLdata is available) ----
app.get("/thpo", (_req, res) => {
    if (!requireContent(res)) return;
    const { thpoTitle, thpoDescription, thpoImage } = CONTENT[0].fields;
    const description = stringFromRichText(thpoDescription);
    const html = genHTML({
        __META_TITLE__: thpoTitle,
        __META_IMAGE__: `https:${thpoImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/classes", (_req, res) => {
    if (!requireContent(res)) return;
    const { classesTitle, classesDescription, classesImage } = CONTENT[0].fields;
    const description = stringFromRichText(classesDescription);
    const html = genHTML({
        __META_TITLE__: classesTitle,
        __META_IMAGE__: `https:${classesImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/programs", (_req, res) => {
    if (!requireContent(res)) return;
    const { programsTitle, programsDescription, programsImage } = CONTENT[0].fields;
    const description = stringFromRichText(programsDescription);
    const html = genHTML({
        __META_TITLE__: programsTitle,
        __META_IMAGE__: `https:${programsImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/library", (_req, res) => {
    if (!requireContent(res)) return;
    const { libraryTitle, libraryDescription, libraryImage } = CONTENT[0].fields;
    const description = stringFromRichText(libraryDescription);
    const html = genHTML({
        __META_TITLE__: libraryTitle,
        __META_IMAGE__: `https:${libraryImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/schedule", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageHeroImage } = CONTENT[0].fields;
    const html = genHTML({
        __META_TITLE__: "Catawba Cultural Workers Scheduling Page",
        __META_IMAGE__: `https:${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: "Directory of scheduling pages for Cultural Center staff and cultural contractors.",
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/booking-confirmation", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageHeroImage } = CONTENT[0].fields;
    const html = genHTML({
        __META_TITLE__: "Catawba Cultural Center",
        __META_IMAGE__: `https:${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: "Program Request Booking Confirmation Page",
    });
    if (!html) return res.status(503).send("Template not ready");
    res.send(html);
});

app.get("/", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageTitle, homepageDescription, homepageHeroImage } = CONTENT[0].fields;
    const description = stringFromRichText(homepageDescription);
    const html = genHTML({
        __META_TITLE__: homepageTitle,
        __META_IMAGE__: `https:${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) {
        // In dev, we won’t have HTMLdata—tell the user the API is up and CRA serves the UI
        if (!isProd) return res.send("API is running (dev mode). Frontend runs via CRA.");
        return res.status(503).send("Template not ready");
    }
    res.send(html);
});

// ---- Static build serving (prod only) ----
if (isProd) {
    const buildPath = path.join(__dirname, "build");
    app.use(express.static(buildPath));
    app.get("*", (_req, res) => res.sendFile(path.join(buildPath, "index.html")));
}

// ---- Data loaders ----
async function fetchData() {
    try {
        const { items } = await client.getEntries();
        CONTENT = items.filter((o) => o.sys?.contentType?.sys?.id === "homepage");

        // Only read build/index.html in production
        if (isProd) {
            const fs = require("fs");
            const indexPath = path.join(__dirname, "build", "index.html");
            if (fs.existsSync(indexPath)) {
                HTMLdata = fs.readFileSync(indexPath, "utf8");
            } else {
                console.warn("build/index.html not found (prod). Did you run `npm run build`?");
                HTMLdata = undefined;
            }
        } else {
            HTMLdata = undefined; // dev: CRA serves the UI
        }
    } catch (err) {
        console.error("Error fetching Contentful entries:", err);
    }
}

async function fetchDirectory() {
    try {
        const entry = await client.getEntry("4KH1nVeg3nBc3lCCFBx7Vf");
        DIRECTORY = entry?.fields?.directoryEntries || [];
    } catch (err) {
        console.error("Error fetching directory:", err);
    }
}

// ---- Startup ----
(async () => {
    await fetchData();
    await fetchDirectory();
    app.listen(PORT, () => {
        console.log(`API listening on http://localhost:${PORT} (${isProd ? "prod" : "dev"})`);
    });
})();

// Refresh Contentful data periodically (12h)
setInterval(() => {
    console.log("Refetching content…");
    fetchData();
    fetchDirectory();
}, 1000 * 60 * 60 * 12);
