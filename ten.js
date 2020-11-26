var qs = ["Tko ima najviše osvojenih Australian Opena?",
"Koja je država najviše puta bila finalist Davis Cupa?",
"Koje je godine Marin Čilić osvojio US Open?",
"Koliko naslova Roland Garrosa ima Rafael Nadal?",
"Koliko je puta Goran Ivanišević bio u finalu Wimbeldona?",
"Koja je najviša pozicija na ATP ljestvici do koje je dospio neki hrvatski tenisač?",
"Tko je osvojio ATP Finals 2019. godine?",
"Koja hrvatska tenisačica ima osvojen juniorski US Open i Australian Open?",
"Koliko puta je Hrvatska osvojila Hopman Cup?",
"Koliko ukupno WTA naslova ima Serena Williams?"]

var qst = ["Tko ima najviše osvojenih Australian Opena?",
"Koja je država najviše puta bila finalist Davis Cupa?",
"Koje je godine Marin Čilić osvojio US Open?",
"Koliko naslova Roland Garrosa ima Rafael Nadal?",
"Koliko je puta Goran Ivanišević bio u finalu Wimbeldona?",
"Koja je najviša pozicija na ATP ljestvici do koje je dospio neki hrvatski tenisač?",
"Tko je osvojio ATP Finals 2019. godine?",
"Koja hrvatska tenisačica ima osvojen juniorski US Open i Australian Open?",
"Koliko puta je Hrvatska osvojila Hopman Cup?",
"Koliko ukupno WTA naslova ima Serena Williams?"]

var as = ["Novak Đoković",
"Sjedinjene Američke države",
"2014. godine",
"12",
"4",
"2.",
"Stefanos Tsitsipas",
"Ana Konjuh",
"1",
"72"]

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
		document.getElementById("fontup").innerHTML = "Tenis     -     " + (score/qst.length*100) + "%";
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


