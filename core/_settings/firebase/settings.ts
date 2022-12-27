import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBXdLRJXpA0tczpz7VPt1P8vTdHs-caPpU',
  authDomain: 'projectopenfrontendmystarlist.firebaseapp.com',
  projectId: 'projectopenfrontendmystarlist',
  storageBucket: 'projectopenfrontendmystarlist.appspot.com',
  messagingSenderId: '70518221336',
  appId: '1:70518221336:web:304445727b25ff7bfcf16d',
  measurementId: 'G-V4KTS06EDP'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// Emulator doesn't work with cypress well
declare global {
  interface Window {
    Cypress: any
  }
}
const isDevMode = process.env.NODE_ENV === 'development'
const isWindowDefinned = typeof window !== 'undefined'
const isntCypress = isWindowDefinned && window.Cypress === undefined
if (isDevMode && isntCypress) {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(auth, 'http://localhost:9099')
}
