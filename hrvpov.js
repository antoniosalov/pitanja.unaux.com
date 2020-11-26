var qs = ["Kako se zvao prvi gradonačelnik grada Zagreba?",
"Kako se zove mjesto u kojem je pronađena Bašćanska ploča?",
"Koje se godine odigrala bitka s Tatarima na Grobničkom polju?",
"Koje godine Ivan Kukuljević Sakcinski održao poznati govor u saboru?",
"Koje je godine Ante Starčević utemeljio Stranku prava?",
"Koliko je godina postojala Dubrovačka Republika?",
"Kako se zove pogranično područje organizirano kao obrambeni pojas?",
"Koji je bio glavni grad Kneževine Panonske Hrvatske?",
"Koliko je crveno-bijelih polja imao grb Hrvatsko-Ugarskog  kraljevstva?",
"Kojeg je datuma 1990. godine donesen prvi hrvatski ustav?"]

var qst = ["Kako se zvao prvi gradonačelnik grada Zagreba?",
"Kako se zove mjesto u kojem je pronađena Bašćanska ploča?",
"Koje se godine odigrala bitka s Tatarima na Grobničkom polju?",
"Koje godine Ivan Kukuljević Sakcinski održao poznati govor u saboru?",
"Koje je godine Ante Starčević utemeljio Stranku prava?",
"Koliko je godina postojala Dubrovačka Republika?",
"Kako se zove pogranično područje organizirano kao obrambeni pojas?",
"Koji je bio glavni grad Kneževine Panonske Hrvatske?",
"Koliko je crveno-bijelih polja imao grb Hrvatsko-Ugarskog  kraljevstva?",
"Kojeg je datuma 1990. godine donesen prvi hrvatski ustav?"]

var as = ["Janko Kamauf",
"Jurandvor",
"1242.",
"1843.",
"1861.",
"450",
"Vojna krajina",
"Sisak",
"16",
"22. prosinca"]

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
		document.getElementById("fontup").innerHTML = "Hrvatska     -     " + (score/qst.length*100) + "%";
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


