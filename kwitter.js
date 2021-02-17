function adduser()
{
    username = document.getElementById("usernameinput").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
    
}