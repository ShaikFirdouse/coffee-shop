function myfun(){
    let username=document.getElementById('username').value
    let pass= document.getElementById('pass').value
    if(username == "fiddu" && pass == "fiddu1"){
        window.location="home.html"
    }
    else{
    document.getElementById('para').innerHTML="Invalid!"
    }
}
