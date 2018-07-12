const gulp = require("gulp");
const jest = require("gulp-jest").default;
const jestConf = require("../../jest.config");

gulp.task("test", () => {
	process.env.NODE_ENV = "test"; // eslint-disable-line no-process-env

	return gulp.src("./")
		.pipe(jest(jestConf));
});
