
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" ! ";
function addRoom(){
      Room_name=Document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.localStorage="kitter_page.HTML";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){ 
      console.log(name);
      localStorage.setItem("user_name");
      window.location="kitter_page.HTML";
      function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html"; }
}
