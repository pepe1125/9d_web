var MaiTorture = 15000
var termek02 = 6999
var termek03 = 29880


function hozzaad(termek) {
    db = document.getElementById("darabszam").value
    localStorage.setItem(termek, db)
    alert("Sikeresen hozzáadtuk a kosaradhoz!")
}