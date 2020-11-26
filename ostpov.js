var qs = ["Koje je godine usvojen ustav SAD-a?",
"Koji je američki predsjednik provodio politiku velike batine?",
"Kako se zove prvo englesko naselje na području SAD-a?",
"Koje je godine Južni Sudan postao neovisan?",
"Koje je godine Nelson Mandela izabran za predsjednika?",
"Koja je država do 1999. godine upravljala Posebnom upravnom regijom Makao?",
"Koja je država proglasila nezavisnost od Indije 1971. godine?",
"Koje je godine prvi puta otkriven dio Anktartike?",
"Kako se zove osoba koja je 1788. sa 11 brodova uplovila u Botany Bay?",
"Kako se nazivaju starosjedioci Novog Zelanda?"]

var qst = ["Koje je godine usvojen ustav SAD-a?",
"Koji je američki predsjednik provodio politiku velike batine?",
"Kako se zove prvo englesko naselje na području SAD-a?",
"Koje je godine Južni Sudan postao neovisan?",
"Koje je godine Nelson Mandela izabran za predsjednika?",
"Koja je država do 1999. godine upravljala Posebnom upravnom regijom Makao?",
"Koja je država proglasila nezavisnost od Indije 1971. godine?",
"Koje je godine prvi puta otkriven dio Anktartike?",
"Kako se zove osoba koja je 1788. sa 11 brodova uplovila u Botany Bay?",
"Kako se nazivaju starosjedioci Novog Zelanda?"]

var as = ["1787. godine",
"Theodore Roosevelt",
"Jamestown",
"2011. godine",
"1994. godine",
"Portugal",
"Bangladeš",
"1739. godine",
"Arthur Phillip",
"Maori"]

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


