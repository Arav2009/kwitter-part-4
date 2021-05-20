var firebaseConfig = {
    apiKey: "AIzaSyDjTa4ShGPZDhvKqYEyveaiogIrZ_8EW0w",
    authDomain: "kwitter-18345.firebaseapp.com",
    projectId: "kwitter-18345",
    storageBucket: "kwitter-18345.appspot.com",
    messagingSenderId: "192458360081",
    appId: "1:192458360081:web:7dbab224e2c6dff6ae78b0"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  

      
    });});}
getData();
