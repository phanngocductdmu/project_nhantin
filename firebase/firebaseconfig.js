import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import * as firebase from 'firebase';

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
