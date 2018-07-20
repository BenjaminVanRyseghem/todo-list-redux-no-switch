const gulp = require("gulp");
const connect = require("gulp-connect");
const config = require("../config").watch;

gulp.task("build", ["browserify", "html", "styles"], () => {
	gulp.src(config.src).pipe(connect.reload());
});

gulp.task("build:prod", ["browserify:min", "styles"], () => {});
