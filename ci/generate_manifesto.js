const SHORT_AGE = "43200";
const LONG_AGE = "86400";

const glob = require("glob");
const fs = require("fs");

const allManifests = [];

const allFiles = glob.sync("*.*", {
	cwd: "dist",
	nodir: true
});

allFiles.forEach((name) => {
	if (name === "manifest.json") {
		return;
	}

	let age = null;
	if (name.match(/\.(js|map)$/)) {
		age = LONG_AGE;
	} else {
		age = SHORT_AGE;
	}

	allManifests.push({
		name,
		CacheControl: `max-age=${age}`
	});
});

fs.writeFile("dist/manifest.json", JSON.stringify(allManifests), (err) => {
	if (err) {
		console.error(err); // eslint-disable-line no-console
	}
});
