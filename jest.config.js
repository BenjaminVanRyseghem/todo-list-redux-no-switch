module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["**/src/**/*.{js,jsx}"],
	coverageDirectory: "./coverage",
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	testMatch: [
		"**/tests/**/*.js?(x)",
		"**/?(*.)(-test).js?(x)"
	]
};
