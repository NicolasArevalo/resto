import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 'AIzaSyD-q-rLRCPDQoTIQIXnbALTx8VR4PkI2KE',
	authDomain: 'restomanagment.firebaseapp.com',
	projectId: 'restomanagment',
	storageBucket: 'restomanagment.appspot.com',
	messagingSenderId: '344679622185',
	appId: '1:344679622185:web:3ae0cc66d60f3591f09e38',
	measurementId: 'G-VGXLP33F5K',
	databaseURL: 'https://DATABASE_NAME.firebaseio.com',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
/* const analytics = getAnalytics(app) */
const db = getFirestore(app)

export { app, db }
