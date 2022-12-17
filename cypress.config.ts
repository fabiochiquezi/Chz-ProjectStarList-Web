import admin from 'firebase-admin'
import { defineConfig } from 'cypress'
import { myID } from 'firebase.mysettings'
import { plugin as cypressFirebasePlugin } from 'cypress-firebase'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressFirebasePlugin(on, config, admin)
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'pages/**/*.e2e.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      TEST_UID: myID
    }
  }
})
