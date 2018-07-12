let gulp = require("gulp");
let config = require("../config").html;

gulp.task("html", () => gulp.src(config.src)
    .pipe(gulp.dest(config.dest)));
