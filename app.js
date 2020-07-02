function func(){

    if(document.getElementById("exampleInputEmail1").value == ""){
        alert("Enter an email address");
    } else {

        var email = document.getElementById("exampleInputEmail1").value;
        console.log(email);
    }

    var msg = document.getElementById("textmsg").value;
    console.log(msg);
}