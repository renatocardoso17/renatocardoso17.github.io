import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyAaTTFwVXGOPH10b93J4DV1eteu4iPs8jc",
    authDomain: "my-webiste-58f92.firebaseapp.com",
    databaseURL: "https://my-webiste-58f92.firebaseio.com",
    projectId: "my-webiste-58f92",
    storageBucket: "my-webiste-58f92.appspot.com",
    messagingSenderId: "499391346675",
    appId: "1:499391346675:web:3ce7ae9fd3235626a5c486",
    measurementId: "G-5BPVT2VKW5"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
