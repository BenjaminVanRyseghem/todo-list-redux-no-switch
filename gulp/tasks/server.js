const gulp = require("gulp");
const connect = require("gulp-connect");
const config = require("../config").server;

gulp.task("server", () => {
	connect.server(config.settings);
});
