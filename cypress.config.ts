import { defineConfig } from "cypress"
import path from "path"
import { MY_PUBLIC_VERCEL_URL } from "./src/app/utils/constants/variables"
console.log(MY_PUBLIC_VERCEL_URL)

module.exports = defineConfig({
  e2e: {
    baseUrl: MY_PUBLIC_VERCEL_URL,
    setupNodeEvents(on, config) {
      // Set up Webpack for Cypress
      const webpack = require("@cypress/webpack-dev-server")
      on("dev-server:start", (options) => {
        return webpack({
          webpackOptions: {
            resolve: {
              alias: {
                "@": path.resolve(__dirname, "../../src"), // Adjust path as needed
              },
            },
          },
        })
      })
    },
  },
})
