var qs = ["Tko je osvojio zlatnu loptu 2007. godine?",
"Kako se zove trener koji je osvojio Ligu prvaka 2010. godine?",
"Koji igrač drži rekord po broju zabijenih golova u jednoj sezoni engleske Premier Lige?",
"Tko je osvojio svjetsko prvenstvo 1994. godine?",
"Koje godine je Urugvaj posljednji put osvojio Svjetsko prvenstvo?",
"Koji klub ima najviše osvojenih FA kupova?",
"Koji igrač drži rekord za najviše zabijenih golova u Ligi prvaka?",
"Tko je najviše puta nosio kapetansku traku Hrvatske?",
"Koja država ima najviše osvojenih Copa America?",
"Koji igrač je zaradio najviše crvenih kartona na Europskim prvenstvima?"]

var qst = ["Tko je osvojio zlatnu loptu 2007. godine?",
"Kako se zove trener koji je osvojio Ligu prvaka 2010. godine?",
"Koji igrač drži rekord po broju zabijenih golova u jednoj sezoni engleske Premier Lige?",
"Tko je osvojio svjetsko prvenstvo 1994. godine?",
"Koje godine je Urugvaj posljednji put osvojio Svjetsko prvenstvo?",
"Koji klub ima najviše osvojenih FA kupova?",
"Koji igrač drži rekord za najviše zabijenih golova u Ligi prvaka?",
"Tko je najviše puta nosio kapetansku traku Hrvatske?",
"Koja država ima najviše osvojenih Copa America?",
"Koji igrač je zaradio najviše crvenih kartona na Europskim prvenstvima?"]

var as = ["Kaka",
"Jose Mourinho",
"Mohamed Salah",
"Brazil",
"1950. godine",
"Arsenal",
"Cristiano Ronaldo",
"Darijo Srna",
"Urugvaj",
"Radoslav Latal"]

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
		document.getElementById("fontup").innerHTML = "Nogomet     -     " + (score/qst.length*100) + "%";
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


