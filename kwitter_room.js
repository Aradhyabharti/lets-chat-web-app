// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVFkrnXodaKgXXOG4XAaNqbpAwNNDKr4Q",
    authDomain: "kwitter-e3364.firebaseapp.com",
    databaseURL: "https://kwitter-e3364-default-rtdb.firebaseio.com",
    projectId: "kwitter-e3364",
    storageBucket: "kwitter-e3364.appspot.com",
    messagingSenderId: "377338039217",
    appId: "1:377338039217:web:e541bb18d1c12baf118b90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);






Username = localStorage.getItem("username");
console.log(Username);
document.getElementById("parausername").innerHTML="<p>Welcome "+Username+"</p>";


function addroom(){
  room_name = document.getElementById("Roomname").value;
  
  firebase.database().ref("/").child(room_name).update({
        purpose:"addindroomname"
  });
  localStorage.setItem("roomname",room_name);
  window.location = "kwitter_page.html";
  
  }



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='roomname' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+
     "</div><hr>";
   //End code
   });});}
getData();





function redirecttoroomname(name)
{
localStorage.setItem("roomname", name);
window.location="kwitter_page.html";
}







