const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
	reporterOptions: {
		mochaFile: 'reports/test-results.xml',
		toConsole: true,
		outputs: true,
    testCaseSwitchClassnameAndName: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
  },
});
