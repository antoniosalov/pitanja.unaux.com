var qs = ["Koja je najbrža kopnena životinja na svijetu?",
"Koliko se različitih životinja nalazi u grbu Republike Hrvatske?",
"Koja se životinja najčešće može naći na grbovima?",
"Kako se zove najmanja ptica na svijetu?",
"Koja životinja ima 32 'mozga' ?",
"Koji pauk plete najsnažniju mrežu na svijetu?",
"Koja životinja jede isključivo naopačke?",
"Kako se zove ptica koja je ime dobila prema portugalskoj riječi za budalu?",
"Kojih je vrsta životinja otkriveno preko 1 000 000?",
"Kako se zove riba koja ne može narasti više od 8 milimetara?"]

var qst = ["Koja je najbrža kopnena životinja na svijetu?",
"Koliko se različitih životinja nalazi u grbu Republike Hrvatske?",
"Koja se životinja najčešće može naći na grbovima?",
"Kako se zove najmanja ptica na svijetu?",
"Koja životinja ima 32 'mozga' ?",
"Koji pauk plete najsnažniju mrežu na svijetu?",
"Koja životinja jede isključivo naopačke?",
"Kako se zove ptica koja je ime dobila prema portugalskoj riječi za budalu?",
"Kojih je vrsta životinja otkriveno preko 1 000 000?",
"Kako se zove riba koja ne može narasti više od 8 milimetara?"]

var as = ["gepard",
"3",
"lav",
"kolibrić",
"pijavica",
"Darwinov pauk",
"flamingo",
"Dodo",
"kukaca",
"Pandaka"]

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
		document.getElementById("fontup").innerHTML = "Životinje     -     " + (score/qst.length*100) + "%";
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


