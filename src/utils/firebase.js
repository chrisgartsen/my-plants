import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAb-2G6u8caBVl2R2FgWhzWOnqILfh_HZc',
  authDomain: 'my-plants-8523b.firebaseapp.com',
  projectId: 'my-plants-8523b',
  storageBucket: 'my-plants-8523b.appspot.com',
  messagingSenderId: '1009730130453',
  appId: '1:1009730130453:web:fa064ca9e6349110d5f41c'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth, onAuthStateChanged }
