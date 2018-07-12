const gulp = require("gulp");
const sass = require("gulp-sass");
const config = require("../config.js").sass;

gulp.task("styles", () => gulp.src(config.src)
	.pipe(sass(config.settings))
	.pipe(gulp.dest(config.dest)));
