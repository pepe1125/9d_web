function checklogin(){
    if (localStorage.getItem("logged") === null) {
        document.getElementById("bejkos").innerHTML = " Bejelentkezés"
    } else if(localStorage.getItem("logged") == "true"){
        document.getElementById("bejkos").innerHTML = " Kosár"
    }}