module.exports = {
	// The root directory that Jest should scan for tests and modules
	roots: ["<rootDir>/src"],

	// A list of file extensions that Jest should look for
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/imageMock.js",
	},

	// Transform files with TypeScript using ts-jest
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},

	transformIgnorePatterns: [
		"/node_modules/", // Ignore node_modules
		"\\.(jpg|jpeg|png|gif|svg|ico|tiff|bmp|woff|woff2|eot|ttf|otf)$", // Exclude image and font files
	],

	// Test environment setup
	testEnvironment: "jsdom",

	// Test match patterns
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],

	// Module paths to use in test environment
	modulePaths: ["<rootDir>/src/"],

	// Setup files before Jest runs tests
	// setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

	// Ignore certain paths when looking for modules
	modulePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],

	// Collect coverage information
	collectCoverage: true,
	coverageReporters: ["json", "lcov", "text", "html"],

	// Additional options for ts-jest
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tsconfig.json",
		},
	},
};
