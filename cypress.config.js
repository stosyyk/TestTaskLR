const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://demo.vercel.store",
        viewportWidth: 1536,
        viewportHeight: 960,
    },
    chromeWebSecurity: false
});