const dest = "./dist";
const src = "./src";
const babelify = require("babelify");
const envify = require("envify");

module.exports = {
	linting: {
		source: ["src/**/*.{js,jsx}", "gulp/tasks/**/*.js", "example/**/*.{js,jsx}", "lib/**/*.{js,jsx}", "tests/**/*.{js,jsx}"]
	},
	browserify: {
		settings: {
			transform: [envify, babelify],
			standalone: "Todo",
			entries: `${src}/index.js`,
			debug: true
		},
		dest,
		outputName: "seat-manager.js",
		outputMinName: "seat-manager.min.js"
	},
	server: {
		settings: {
			root: dest,
			host: "0.0.0.0",
			port: 8484,
			livereload: {
				port: 35929
			},
			middleware: () => []
		}
	},
	sass: {
		src: "./styles/main.scss",
		dest,
		settings: {
			indentedSyntax: false,
			imagePath: "/images"
		}
	},
	html: {
		src: "example/index.html",
		dest
	},
	watch: {
		src: ["./src/**/*.*", "./styles/**/*.*", "./example/**/*.*"],
		tasks: ["build"]
	}
};
