//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBsu71obLS5F7emeW9BtEbzBB8pNm5ALUo",
      authDomain: "diary-web-app-5cfe6.firebaseapp.com",
      databaseURL: "https://diary-web-app-5cfe6-default-rtdb.firebaseio.com",
      projectId: "diary-web-app-5cfe6",
      storageBucket: "diary-web-app-5cfe6.appspot.com",
      messagingSenderId: "947395619086",
      appId: "1:947395619086:web:56aa10419ee9ffcc8b0f5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();