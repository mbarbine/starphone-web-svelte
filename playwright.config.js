/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://localhost:3000'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
