var firebaseConfig = {
    apiKey: "AIzaSyDsewEyPYXR0MYhC2O1GtNfgFpbt0tAg3o",
    authDomain: "kwitter-9e305.firebaseapp.com",
    databaseURL: "https://kwitter-9e305-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e305",
    storageBucket: "kwitter-9e305.appspot.com",
    messagingSenderId: "889462093080",
    appId: "1:889462093080:web:3fb6a92eab8f6f5f985a6d",
    measurementId: "G-TKEJKV1CBP"
  };
  
  
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    


    });});}
getData();
