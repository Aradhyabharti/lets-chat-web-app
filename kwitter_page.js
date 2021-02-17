//YOUR FIREBASE LINKS
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


user_name = localStorage.getItem("username") ;
room_name = localStorage.getItem("roomname");

function send()
{
      msg = document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("Messsage").value = "" ;

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
Name = message_data['name'];
message = message_data['message'];
like = message_data ['like'];
Name_with_tag = "<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
Message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";


row = Name_with_tag+Message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }


getData();


function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_Likes = Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
   like : updated_Likes   
});
}






function logout()
{
   localStorage.removeItem("username");
   localStorage.removeItem("roomname");
   window.location = "index.html";
}
