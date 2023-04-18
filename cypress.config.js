const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rs-blackmarket-api.herokuapp.com',
    failOnStatusCode: false,
    defaultCommandTimeout: 1000,
    experimentalRunAllSpecs: true,

      
  },
});
