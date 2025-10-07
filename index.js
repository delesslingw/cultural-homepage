require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const sslRedirect = require("heroku-ssl-redirect").default;

const app = express();
const PORT = process.env.PORT || 3333;
const isProd = process.env.NODE_ENV === "production";

// ---- App state ----
let CONTENT = [];
let DIRECTORY = [];
let HTMLdata = undefined; // only used in prod for meta routes

// ---- Helpers ----
const stringFromRichText = (rt) => {
    const richTextToString = (obj) => {
        if (obj?.value) return obj.value;
        const content = obj?.content || [];
        return content.reduce((acc, curr) => `${acc}${richTextToString(curr)}`, "");
    };
    return stringFromRichTextSafe(rt).replaceAll('"', "");

    function stringFromRichTextSafe(x) {
        try {
            return richTextToString(x);
        } catch {
            return "";
        }
    }
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

// ---- Load local JSON + optionally rewrite asset URLs to /assets ----
function loadLocalData() {
    const dataPath = path.join(__dirname, "data", "content.json");
    const raw = fs.readFileSync(dataPath, "utf8");
    const items = JSON.parse(raw);

    // populate CONTENT and DIRECTORY with the same shapes your routes expect
    CONTENT = items.filter((o) => o.sys?.contentType?.sys?.id === "homepage");
    const dirEntry = items.find((o) => o.sys?.id === "4KH1nVeg3nBc3lCCFBx7Vf");
    DIRECTORY = dirEntry?.fields?.directoryEntries || [];

    // if an asset file exists in /public/assets, rewrite its URL to /assets/<file>
    const publicAssets = path.join(__dirname, "public", "assets");
    let existing = new Set();
    try {
        existing = new Set(fs.readdirSync(publicAssets));
    } catch (_) {
        // folder might not exist; skip rewrite
    }

    const maybeRewriteAsset = (url) => {
        // accept //images.ctfassets..., https://..., or already-local paths
        try {
            const full = url.startsWith("http") ? url : `https:${url}`;
            const fname = path.basename(new URL(full).pathname);
            if (existing.has(fname)) return `/assets/${fname}`;
        } catch {}
        return url; // leave original if we can't rewrite
    };

    const deepRewrite = (v) => {
        if (Array.isArray(v)) return v.map(deepRewrite);
        if (v && typeof v === "object") {
            // contentful asset shape
            if (v.fields?.file?.url) {
                v.fields.file.url = maybeRewriteAsset(v.fields.file.url);
            }
            for (const k of Object.keys(v)) v[k] = deepRewrite(v[k]);
            return v;
        }
        return v;
    };

    CONTENT = CONTENT.map((it) => ({ ...it, fields: deepRewrite({ ...it.fields }) }));
    if (dirEntry && dirEntry.fields) dirEntry.fields = deepRewrite({ ...dirEntry.fields });
}

// ---- Middleware ----
if (isProd) app.use(sslRedirect());
app.use(express.json());

// ---- API routes ----
app.get("/api/directory", (_req, res) => res.send(DIRECTORY || []));
app.get("/api", (_req, res) => res.send(CONTENT || []));

// ---- Meta/HTML routes ----
app.get("/thpo", (_req, res) => {
    if (!requireContent(res)) return;
    const { thpoTitle, thpoDescription, thpoImage } = CONTENT[0].fields;
    const description = stringFromRichText(thpoDescription);
    const html = genHTML({
        __META_TITLE__: thpoTitle,
        __META_IMAGE__: `https:${thpoImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html")); // fallback
    res.send(html);
});

app.get("/classes", (_req, res) => {
    if (!requireContent(res)) return;
    const { classesTitle, classesDescription, classesImage } = CONTENT[0].fields;
    const description = stringFromRichText(classesDescription);
    const html = genHTML({
        __META_TITLE__: classesTitle,
        __META_IMAGE__: `${classesImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html"));
    res.send(html);
});

app.get("/programs", (_req, res) => {
    if (!requireContent(res)) return;
    const { programsTitle, programsDescription, programsImage } = CONTENT[0].fields;
    const description = stringFromRichText(programsDescription);
    const html = genHTML({
        __META_TITLE__: programsTitle,
        __META_IMAGE__: `${programsImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html"));
    res.send(html);
});

app.get("/library", (_req, res) => {
    if (!requireContent(res)) return;
    const { libraryTitle, libraryDescription, libraryImage } = CONTENT[0].fields;
    const description = stringFromRichText(libraryDescription);
    const html = genHTML({
        __META_TITLE__: libraryTitle,
        __META_IMAGE__: `${libraryImage.fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html"));
    res.send(html);
});

app.get("/schedule", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageHeroImage } = CONTENT[0].fields;
    const html = genHTML({
        __META_TITLE__: "Catawba Cultural Workers Scheduling Page",
        __META_IMAGE__: `${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: "Directory of scheduling pages for Cultural Center staff and cultural contractors.",
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html"));
    res.send(html);
});

app.get("/booking-confirmation", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageHeroImage } = CONTENT[0].fields;
    const html = genHTML({
        __META_TITLE__: "Catawba Cultural Center",
        __META_IMAGE__: `${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: "Program Request Booking Confirmation Page",
    });
    if (!html) return res.sendFile(path.join(__dirname, "build", "index.html"));
    res.send(html);
});

app.get("/", (_req, res) => {
    if (!requireContent(res)) return;
    const { homepageTitle, homepageDescription, homepageHeroImage } = CONTENT[0].fields;
    const description = stringFromRichText(homepageDescription);
    const html = genHTML({
        __META_TITLE__: homepageTitle,
        __META_IMAGE__: `${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: description,
    });
    if (!html) {
        if (!isProd) return res.send("API is running (dev mode). Frontend runs via CRA.");
        return res.sendFile(path.join(__dirname, "build", "index.html"));
    }
    res.send(html);
});

// ---- Static build serving (prod only) ----
if (isProd) {
    const buildPath = path.join(__dirname, "build");
    app.use(express.static(buildPath)); // this serves /assets from /public too
    app.get("*", (_req, res) => res.sendFile(path.join(buildPath, "index.html")));
}

// ---- Startup ----
(function boot() {
    // Load local JSON once at startup
    loadLocalData();

    // Only read build/index.html (for meta injection) in production
    if (isProd) {
        const indexPath = path.join(__dirname, "build", "index.html");
        if (fs.existsSync(indexPath)) {
            HTMLdata = fs.readFileSync(indexPath, "utf8");
        } else {
            console.warn("build/index.html not found (prod). Did you run `npm run build`?");
            HTMLdata = undefined;
        }
    } else {
        HTMLdata = undefined; // dev: CRA serves UI
    }

    app.listen(PORT, () => {
        console.log(`API listening on http://localhost:${PORT} (${isProd ? "prod" : "dev"})`);
    });
})();
