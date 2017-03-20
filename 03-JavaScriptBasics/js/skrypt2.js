var klik = 0;
function klikniecia() {
	klik += 1;
	document.getElementById('message').innerHTML = "Kliknąłeś " + klik + " razy.";
}