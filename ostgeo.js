var qs = ["Koliko država spada pod kontinent Australija?",
"Koliko se afričkih država nalazi u cijelosti unutar neke druge države?",
"Na koliko je provincija podjeljena Australija?",
"Koliko afričkih država ima veću površinu od površine otoka Grenlanda?",
"Koja afrička država ima najviše stanovnika?",
"Kako se zove najduža rijeka u Australiji?",
"Kako se zove najveće afričko jezero?",
"Kako se zove najviši vrh Australije?",
"Koliko država posjeduje određene djelove Anktartike?",
"Koji je najviši vrh Anktartike?"]

var qst = ["Koliko država spada pod kontinent Australija?",
"Koliko se afričkih država nalazi u cijelosti unutar neke druge države?",
"Na koliko je provincija podjeljena Australija?",
"Koliko afričkih država ima veću površinu od površine otoka Grenlanda?",
"Koja afrička država ima najviše stanovnika?",
"Kako se zove najduža rijeka u Australiji?",
"Kako se zove najveće afričko jezero?",
"Kako se zove najviši vrh Australije?",
"Koliko država posjeduje određene djelove Anktartike?",
"Koji je najviši vrh Anktartike?"]

var as = ["14",
"2",
"7",
"2",
"Nigerija",
"Murray",
"Viktorijino jezero",
"Mount Kosciuszko",
"6",
"Vinstonov Massif"]

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
		document.getElementById("fontup").innerHTML = "Ostalo     -     " + (score/qst.length*100) + "%";
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


