const path = require("path");

const { generateLinksJson } = require("./scripts/generate-links");
const { consolidateLinks } = require("./scripts/consolidate-links");

if (process.platform === "win32") {
    const cygwinPath = path.join(__dirname, ".cygwin");

    // Generate a links.json file, so we know how to restore the hardlinks on unpack
    generateLinksJson(cygwinPath);

    // Consolidate the links, so we don't pack a bunch of duplicate files!
    consolidateLinks();
} else {
    console.log("Not Windows; Cygwin is not required.")
}
