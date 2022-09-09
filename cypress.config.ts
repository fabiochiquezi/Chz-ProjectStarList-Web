import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            config.baseUrl = 'https://localhost:3000'
            config.viewportHeight = 1080
            config.viewportWidth = 1920
        }
    }
})
