import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDL4Sa46WOk7yn7jHamfsbs7PgdGJBW5PM",
    authDomain: "profitlyapp.firebaseapp.com",
    databaseURL: "https://profitlyapp.firebaseio.com",
    projectId: "profitlyapp",
    messagingSenderId: "164606918502"
};
const fire = firebase.initializeApp(config);
export default fire;