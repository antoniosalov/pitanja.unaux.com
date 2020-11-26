var qs = ["Koliko organskih sustava čini ljudski organizam?",
"Koji je najveći organ ljudskoga tijela?",
"Kako se zove najmanja kost u čovijeku?",
"Koliko mišića postoji u ljudskom tijelu?",
"Koliko kralježaka ima čovijek?",
"Koja je boja očiju najčešća u ljudi?",
"Koliko otprilike litara iznosi ukupni kapacitet pluća?",
"Koliko centimetara iznosi visina najvišeg čovijeka na svijetu ikada?",
"Koju kost predstavlja naziv Radius",
"Koji je najzastupljeniji element u ljudskom tijelu?"]

var qst = ["Koliko organskih sustava čini ljudski organizam?",
"Koji je najveći organ ljudskoga tijela?",
"Kako se zove najmanja kost u čovijeku?",
"Koliko mišića postoji u ljudskom tijelu?",
"Koliko kralježaka ima čovijek?",
"Koja je boja očiju najčešća u ljudi?",
"Koliko otprilike litara iznosi ukupni kapacitet pluća?",
"Koliko centimetara iznosi visina najvišeg čovijeka na svijetu ikada?",
"Koju kost predstavlja naziv Radius",
"Koji je najzastupljeniji element u ljudskom tijelu?"]

var as = ["11",
"koža",
"stremen",
"752",
"33",
"smeđa",
"6",
"272",
"palčanu kost",
"ugljik"]

var score = 0;

function show(){
	if (qs.length > 0){
		var x = Math.floor(Math.random()*qs.length);
		document.getElementById("ques").innerHTML = qs[x];
		qs.splice(x,1)

		document.getElementById("ans").disabled = false;
	}
	else{
		document.getElementById("ques").innerHTML = "Za ovu kategoriju više nema pitanja u bazi. Osvježite stranicu kako biste krenuli ispočetka ili se okušajte u nekoj od ostalih kategorija"
		document.getElementById("fontup").innerHTML = "Ljudi     -     " + (score/qst.length*100) + "%";
	}
	document.getElementById("res").innerHTML = ""
}

function check(){
	var a = document.forms["input"]["ans"].value;
	cans = as[qst.indexOf(document.getElementById("ques").textContent)];

	if (a.replace(/\s/g, '').toLowerCase() == cans.replace(/\s/g, '').toLowerCase()){
		document.getElementById("res").innerHTML = "Vaš odgovor je točan"
		score += 1;
	}
	else{
		document.getElementById("res").innerHTML = "Vaš odgovor " + a + " je netočan. Točan odgoovor je " + cans;
	}
	document.getElementById("del").click();	

	document.getElementById("ans").disabled = true;
}


