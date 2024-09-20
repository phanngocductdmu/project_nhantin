import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_udyZYvTt2SzOMHhRGIajjkTDyelLNwQ',
  authDomain: 'zalotest-23948.firebaseapp.com',
  databaseURL: 'https://zalotest-23948-default-rtdb.firebaseio.com',
  projectId: 'zalotest-23948',
  storageBucket: 'zalotest-23948.appspot.com',
  messagingSenderId: '281312664739',
  appId: '1:281312664739:web:d2becf0bb73d87ce843316',
  measurementId: 'G-NQ5CXXV1WP',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth };
