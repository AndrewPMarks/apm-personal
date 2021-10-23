import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export const firebaseInit = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyC3CIVOMdZgB-X_oUqZKMU51YYO0NF_vKo',
        authDomain: 'apm-personal.firebaseapp.com',
        projectId: 'apm-personal',
        storageBucket: 'apm-personal.appspot.com',
        messagingSenderId: '643343842108',
        appId: '1:643343842108:web:ef6554fee89aa875aefc39',
        measurementId: 'G-D9VB1HX28W',
    }

    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    return [app, analytics]
}
