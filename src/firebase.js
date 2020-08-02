import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCiYiZ9bo7VI-mjpslzUEwZbisdRB8YV_8',
  authDomain: 'tinder-clone-6f8cf.firebaseapp.com',
  databaseURL: 'https://tinder-clone-6f8cf.firebaseio.com',
  projectId: 'tinder-clone-6f8cf',
  storageBucket: 'tinder-clone-6f8cf.appspot.com',
  messagingSenderId: '684329171239',
  appId: '1:684329171239:web:ffe08e53743ac8c2029102',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
