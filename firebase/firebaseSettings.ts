import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBXdLRJXpA0tczpz7VPt1P8vTdHs-caPpU',
    authDomain: 'projectopenfrontendmystarlist.firebaseapp.com',
    projectId: 'projectopenfrontendmystarlist',
    storageBucket: 'projectopenfrontendmystarlist.appspot.com',
    messagingSenderId: '70518221336',
    appId: '1:70518221336:web:304445727b25ff7bfcf16d',
    measurementId: 'G-V4KTS06EDP'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

if (process.env.NODE_ENV === 'development') {
    //settings.emulator('http://localhost:9099')
}
