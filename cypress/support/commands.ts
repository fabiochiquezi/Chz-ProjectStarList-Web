/// <reference types="cypress" />

// ---------- Firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { attachCustomCommands } from 'cypress-firebase'
import { myID } from 'firebase.mysettings'
const fbConfig = {
    apiKey: 'AIzaSyBXdLRJXpA0tczpz7VPt1P8vTdHs-caPpU',
    authDomain: 'projectopenfrontendmystarlist.firebaseapp.com',
    projectId: 'projectopenfrontendmystarlist',
    storageBucket: 'projectopenfrontendmystarlist.appspot.com',
    messagingSenderId: '70518221336',
    appId: '1:70518221336:web:304445727b25ff7bfcf16d',
    measurementId: 'G-V4KTS06EDP'
}
firebase.initializeApp(fbConfig)
attachCustomCommands({ Cypress, cy, firebase })

Cypress.Commands.add('deleteCatalogDB', (table: string) => {
    cy.callFirestore('delete', `${table}/${myID}`)
    cy.callFirestore('set', `${table}/${myID}`, { list: [] })
})

Cypress.Commands.add(
    'setTableDB',
    (path: string, data: Record<string, any>) => {
        cy.callFirestore('set', `${path}`, data)
    }
)
