function checklogin(){
    if (localStorage.getItem("savelogin") === null) {
        document.getElementById("bejelent").innerHTML = " Bejelentkezés"
    } else if(localStorage.getItem("savelogin") == "true"){
        document.getElementById("bejelent").innerHTML = " Kosár"
    }}